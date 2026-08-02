import { Stack } from "expo-router";

/**
 * Authentication stack.
 * Screens: Welcome → Login / Sign up (UI comes later from Figma).
 */
export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#FFFFFF" },
      }}
    >
      <Stack.Screen name="welcome" />
      <Stack.Screen name="login" />
      <Stack.Screen name="sign-up" />
    </Stack>
  );
}
