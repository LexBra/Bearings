import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";

import { useAuth } from "@/hooks/useAuth";
import { routes } from "@/navigation";

/**
 * App entry redirect.
 * Sends users to Auth or Tabs based on the auth stub (later: Supabase session).
 */
export default function Index() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator />
      </View>
    );
  }

  if (isAuthenticated) {
    return <Redirect href={routes.tabs.root} />;
  }

  return <Redirect href={routes.auth.welcome} />;
}
