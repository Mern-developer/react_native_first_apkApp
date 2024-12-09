import NoInternetModal from "../components/NointernetModal/NoInternetModal"
import { store } from "@/redux/store";
import { useFonts } from "expo-font";
import { Slot,  Stack, Tabs } from "expo-router";
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from "react";
import { Provider } from "react-redux";
SplashScreen.preventAutoHideAsync();
export default function RootLayout(){
  const [loaded, error] = useFonts({
    'Roboto-Mono': require('../assets/fonts/RobotoMono-Regular.ttf'),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <Provider store={store}>
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="meditation/[id]" options={{headerShown: false}} />
      <Stack.Screen name="(modal)/meditation-adjust-duration" options={{headerShown: false, presentation: 'modal'}} />
    </Stack>
    <NoInternetModal />

    </Provider>
  );
};
