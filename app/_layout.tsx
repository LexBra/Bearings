import "react-native-gesture-handler";
import "../global.css";

import {
  Akshar_400Regular,
  Akshar_500Medium,
  Akshar_600SemiBold,
  Akshar_700Bold,
} from "@expo-google-fonts/akshar";
import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

import { colors } from "@/theme";

SplashScreen.preventAutoHideAsync();

/**
 * Root navigator + design-system font loading.
 * Headers: Akshar · Subheads: DM Sans Bold · Body: system Andale Mono
 */
export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Akshar_400Regular,
    Akshar_500Medium,
    Akshar_600SemiBold,
    Akshar_700Bold,
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.cream },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  );
}
