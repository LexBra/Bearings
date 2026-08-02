import { View } from "react-native";

import { AppText } from "@/components/ui";

type PlaceholderScreenProps = {
  title: string;
};

/**
 * Minimal stand-in so we can verify navigation before Figma UI lands.
 */
export function PlaceholderScreen({ title }: PlaceholderScreenProps) {
  return (
    <View className="flex-1 items-center justify-center bg-cream px-6">
      <AppText variant="overline" color="soil">
        Bearings
      </AppText>
      <AppText variant="title" color="primary" center className="mt-2">
        {title}
      </AppText>
      <AppText variant="body" color="soil" center className="mt-3">
        Placeholder — UI coming from Figma
      </AppText>
    </View>
  );
}
