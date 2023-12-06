import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
// import "AppRegistry.registerComponent";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { NavigationContainer } from "@react-navigation/native";
import FlashMessage from "react-native-flash-message";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";

import { Loading } from "./src/components/Loading";
import Routes from "./src/routes";

import { Background } from "./src/components/Background";

import { AuthProvider } from "./src/contexts/auth";
import store from "./src/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <PaperProvider theme={DefaultTheme}>
      <Provider store={store}>
        <Background>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <NavigationContainer>
            <AuthProvider>
              {fontsLoaded ? <Routes /> : <Loading />}
            </AuthProvider>
          </NavigationContainer>
          <FlashMessage position="top" />
        </Background>
      </Provider>
    </PaperProvider>
  );
}

AppRegistry.registerComponent("main", () => App);
