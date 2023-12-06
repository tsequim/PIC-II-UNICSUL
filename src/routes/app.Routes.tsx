import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// LOGIN / RECOVER
import { Login } from "../screens/Authentication/Login";
import { MissPassword } from "../screens/Authentication/MissPassword";
import { ChangePassword } from "../screens/Authentication/MissPassword/ChangePassword";

// REGISTER
import { Register } from "../screens/Authentication/Register";
import { RegisterConfirmation } from "../screens/Authentication/Register/Confirmation";
import { NewUser } from "../screens/Authentication/Register/Onboarding/NewUser";
import { Address } from "../screens/Authentication/Register/Onboarding/Address";

// MAIN PAGES
import { Home } from "../screens/Home";
import { Orders } from "../screens/Orders";
import { Profile } from "../screens/Profile";

// OTHER PAGES
import { Search } from "../screens/Search";
import { Product } from "../screens/Product";
import { Cart } from "../screens/Cart";
import { List } from "../screens/List";
import { Store } from "../screens/Store";
import { Order } from "../screens/Order";

import { MainHeader } from "../components/Headers";
import { ProductHeader } from "../components/screens/Product/Header";
import { CartHeader } from "../components/screens/Cart/Header";

import HomeIcon from "../assets/icons/homeIcon";
import HearthIcon from "../assets/icons/hearthIcon";
import ListIcon from "../assets/icons/listIcon";
import ProfileIcon from "../assets/icons/profileIcon";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadCache } from "../store/ducks/cart";

import { useAuth } from "../contexts/auth";
import { IUser } from "../@types/user";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppRoutes() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { user, signed } = useAuth();

  useEffect(() => {
    (async function () {
      const cachedCart: any = await AsyncStorage.getItem("@BakeBliss:cart");
      // @ts-ignore
      if (cachedCart) dispatch(loadCache(JSON.parse(cachedCart)));
    })();
  }, []);

  const navigateOnLoad = async () => {
    const stringUser = (await AsyncStorage.getItem(
      "@BakeBliss:user"
    )) as string;
    const user: IUser = JSON.parse(stringUser);

    if (user?.address) {
      // @ts-ignore
      navigation?.navigate("Home");
    } else if (user?.businessData) {
      // @ts-ignore
      navigation?.navigate("Address");
    } else if (user?.onboardingDone == false) {
      // @ts-ignore
      navigation?.navigate("NewUser");
    } else {
      // @ts-ignore
      // navigation?.navigate("Login");
    }
  };

  useEffect(() => {
    navigateOnLoad();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={NavBottomRoutes}
      />
      <Stack.Screen
        options={{
          header: (props) => <></>,
          // headerTransparent: true,
        }}
        name="LoginOnboarding"
        component={Login}
      />
      <Stack.Screen name="Pedidos" component={Orders} />
      <Stack.Screen name="Buscar" component={Search} />
      <Stack.Screen
        options={{
          header: (props) => <ProductHeader {...props} />,
          headerTransparent: true,
        }}
        name="Product"
        component={Product}
      />
      <Stack.Screen
        options={{
          header: (props) => <ProductHeader {...props} />,
          headerTransparent: true,
        }}
        name="Store"
        component={Store}
      />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen
        options={{
          header: (props) => <CartHeader {...props} />,
        }}
        name="Cart"
        component={Cart}
      />
      <Stack.Screen
        options={{
          header: (props) => <></>,
        }}
        name="MissPasswordOnboarding"
        component={MissPassword}
      />
      <Stack.Screen
        options={{
          header: (props) => <></>,
        }}
        name="ChangePasswordOnboarding"
        component={ChangePassword}
      />

      {/* REGISTER */}
      <Stack.Screen
        options={{
          header: (props) => <></>,
        }}
        name="RegisterOnboarding"
        component={Register}
      />
      <Stack.Screen
        options={{
          header: (props) => <></>,
        }}
        name="RegisterConfirmationOnboarding"
        component={RegisterConfirmation}
      />
      <Stack.Screen
        options={{
          header: (props) => <></>,
        }}
        name="NewUserOnboarding"
        component={NewUser}
      />
      <Stack.Screen
        options={{
          header: (props) => <></>,
        }}
        name="AddressOnboarding"
        component={Address}
      />
    </Stack.Navigator>
  );
}

function NavBottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          header: (props) => <MainHeader {...props} />,
          tabBarIcon: ({ color }) => (
            <HomeIcon width={22} height={22} color={color} />
          ),
        }}
        name="HomePage"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <ListIcon width={22} height={22} color={color} />
          ),
        }}
        name="Pedidos"
        component={Orders}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileIcon width={22} height={22} color={color} />
          ),
        }}
        name="Conta"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default AppRoutes;
