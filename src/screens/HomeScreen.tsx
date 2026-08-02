import { Text, View } from "react-native";

/**
 * Temporary home screen.
 * Replace with the first Figma frame when you share it.
 */
export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-brand-soft px-6">
      <Text className="text-4xl font-bold text-brand">Bearings</Text>
      <Text className="mt-3 text-center text-base text-brand-muted">
        Clean project structure is ready. Next we will match your Figma
        designs screen by screen.
      </Text>
    </View>
  );
}
