import type { ReactNode } from "react";
import {
  Pressable,
  View,
  type PressableProps,
  type ViewProps,
} from "react-native";

import { radii, shadows } from "@/theme";
import { cn } from "@/utils/cn";

const cardVariants = {
  elevated: {
    className: "bg-surface",
    shadow: shadows.md,
  },
  outlined: {
    className: "bg-surface border border-line",
    shadow: shadows.none,
  },
  soft: {
    className: "bg-brand-50",
    shadow: shadows.none,
  },
} as const;

export type CardVariant = keyof typeof cardVariants;

type CommonCardProps = {
  variant?: CardVariant;
  className?: string;
  children: ReactNode;
};

export type CardProps =
  | (CommonCardProps &
      Omit<ViewProps, "children" | "className"> & { onPress?: undefined })
  | (CommonCardProps &
      Omit<PressableProps, "children" | "className"> & {
        onPress: NonNullable<PressableProps["onPress"]>;
      });

/**
 * Reusable card container.
 * Prefer only when the card wraps an interaction or a clear grouped unit.
 * Styles come from theme tokens so updates stay centralized.
 */
export function Card({
  variant = "elevated",
  className,
  children,
  ...rest
}: CardProps) {
  const recipe = cardVariants[variant];
  const contentClassName = cn(
    "p-4",
    recipe.className,
    className,
  );
  const contentStyle = {
    borderRadius: radii.lg,
    ...recipe.shadow,
  };

  if ("onPress" in rest && rest.onPress) {
    const { onPress, ...pressableRest } = rest;

    return (
      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        className={cn(contentClassName)}
        style={({ pressed }) => [
          contentStyle,
          pressed ? { opacity: 0.92 } : null,
        ]}
        {...pressableRest}
      >
        {children}
      </Pressable>
    );
  }

  const viewRest = rest as ViewProps;

  return (
    <View className={contentClassName} style={contentStyle} {...viewRest}>
      {children}
    </View>
  );
}
