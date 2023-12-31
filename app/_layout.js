import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Makes the native splash screen (configured in app.json) remain visible until hideAsync is called.
SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      //this is the function that will make the screen display the default splashscreen, notice that it will only load once our custom fonts are loaded in
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
} 

export default Layout;