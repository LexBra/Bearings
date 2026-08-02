import "../global.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

/**
 * Root layout wraps every screen.
 * Keep global providers (auth, theme, query client) here as we add them.
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
