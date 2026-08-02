import { Text, View } from "react-native";

type PlaceholderScreenProps = {
  title: string;
};

/**
 * Minimal stand-in so we can verify navigation before Figma UI lands.
 * Not a designed screen — replace each usage with real UI later.
 */
export function PlaceholderScreen({ title }: PlaceholderScreenProps) {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-2xl font-semibold text-brand">{title}</Text>
      <Text className="mt-2 text-center text-base text-brand-muted">
        Placeholder — UI coming from Figma
      </Text>
    </View>
  );
}
