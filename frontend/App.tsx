import { TokenProvider } from "./providers/TokenProvider";
import LoginWallRouter from "./screens/LoginWallRouter/LoginWallRouter";

export default function App() {
import { Text, View } from "react-native";
import { TokenProvider } from "./providers/TokenProvider";
import { useState, useEffect } from "react";
import * as Font from "expo-font";
import TabNavigator from "./navigation/TabNavigator";
import Splash from "./screens/Splash/Splash";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      BalooBold: require("./assets/fonts/Baloo2-Bold.ttf"),
      BalooRegular: require("./assets/fonts/Baloo2-Regular.ttf"),
    });

    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return <Splash />;
  }

  return (
    <TokenProvider>
      <LoginWallRouter />
    </TokenProvider>
  );
}
