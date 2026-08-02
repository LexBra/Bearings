import { View } from "react-native";

import { AppText } from "@/components/ui";

type PlaceholderScreenProps = {
  title: string;
};

/**
 * Minimal stand-in so we can verify navigation before Figma UI lands.
 * Uses design-system text styles — not a designed product screen.
 */
export function PlaceholderScreen({ title }: PlaceholderScreenProps) {
  return (
    <View className="flex-1 items-center justify-center bg-surface-muted px-6">
      <AppText variant="overline" color="muted">
        Bearings
      </AppText>
      <AppText variant="title" color="brand" center className="mt-2">
        {title}
      </AppText>
      <AppText variant="body" color="muted" center className="mt-3">
        Placeholder — UI coming from Figma
      </AppText>
    </View>
  );
}
