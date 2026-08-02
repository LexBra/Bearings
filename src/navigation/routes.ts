/**
 * Central route paths for Expo Router / React Navigation.
 * Prefer these constants over hardcoded strings.
 */
export const routes = {
  root: "/",
  auth: {
    root: "/(auth)",
    welcome: "/(auth)/welcome",
    login: "/(auth)/login",
    signUp: "/(auth)/sign-up",
  },
  tabs: {
    root: "/(tabs)",
    home: "/(tabs)",
    search: "/(tabs)/search",
    saved: "/(tabs)/saved",
    map: "/(tabs)/map",
    profile: "/(tabs)/profile",
  },
} as const;
