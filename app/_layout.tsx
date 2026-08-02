import "../global.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

/**
 * Root layout for Expo Router.
 * Navigation shell lives here; screen UI lives in src/screens/.
 */
export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#FFFFFF" },
        }}
      />
    </>
  );
}
