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

import { useAuth } from "../contexts/auth";

const Stack = createNativeStackNavigator();

function AuthRoutes() {
  const { user, signed } = useAuth();

  const renderRouteConditions = (user: any) => {
    if (user == null) {
      return "Login";
    } else if (user?.businessData) {
      return "Address";
    } else if (user.mailValidation) {
      return "RegisterConfirmation";
    } else {
      return "NewUser";
    }
  };

  return (
    <Stack.Navigator initialRouteName={renderRouteConditions(user)}>
      <Stack.Screen
        options={{
          header: (props) => <></>,
        }}
        name="Address"
        component={Address}
      />
      <Stack.Screen
        options={{
          header: (props) => <></>,
        }}
        name="NewUser"
        component={NewUser}
      />
      <Stack.Screen
        options={{
          header: (props) => <></>,
          // headerTransparent: true,
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          header: (props) => <></>,
        }}
        name="MissPassword"
        component={MissPassword}
      />
      <Stack.Screen
        options={{
          header: (props) => <></>,
        }}
        name="ChangePassword"
        component={ChangePassword}
      />
      {/* REGISTER */}
      <Stack.Screen
        options={{
          header: (props) => <></>,
        }}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{
          header: (props) => <></>,
        }}
        name="RegisterConfirmation"
        component={RegisterConfirmation}
      />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
