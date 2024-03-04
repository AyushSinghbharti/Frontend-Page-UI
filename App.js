import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "mob-b": require("./assets/fonts/Montserrat-Bold.ttf"),
    "mob": require("./assets/fonts/Montserrat.ttf"),
    "mob-sb": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "rob-sb": require("./assets/fonts/RobotoCondensed-Bold.ttf"),
    "rob-b": require("./assets/fonts/RobotoCondensed-SemiBold.ttf"),
    "rob": require("./assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  return (
    <>
      <Home />
    </>
    //Here I'm wrapping this app
  );
}