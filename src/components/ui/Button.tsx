import {
  ActivityIndicator,
  Pressable,
  type PressableProps,
  View,
} from "react-native";

import { AppText } from "@/components/ui/Text";
import {
  buttonSizes,
  colors,
  fonts,
  type ButtonSize,
} from "@/theme";
import { cn } from "@/utils/cn";

const variants = {
  primary: {
    container: "bg-brand",
    pressed: "bg-brand-700",
    text: "inverse" as const,
    spinner: colors.brand.foreground,
  },
  secondary: {
    container: "bg-brand-100",
    pressed: "bg-brand-200",
    text: "brand" as const,
    spinner: colors.brand.DEFAULT,
  },
  ghost: {
    container: "bg-transparent",
    pressed: "bg-surface-muted",
    text: "brand" as const,
    spinner: colors.brand.DEFAULT,
  },
  danger: {
    container: "bg-danger",
    pressed: "bg-[#912018]",
    text: "inverse" as const,
    spinner: colors.brand.foreground,
  },
} as const;

export type ButtonVariant = keyof typeof variants;

export type ButtonProps = Omit<PressableProps, "children"> & {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  className?: string;
};

/**
 * Reusable Bearings button.
 * Variants/sizes read from theme tokens — update tokens.js to restyle globally.
 */
export function Button({
  label,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className,
  ...rest
}: ButtonProps) {
  const palette = variants[variant];
  const metrics = buttonSizes[size];
  const isDisabled = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      disabled={isDisabled}
      className={cn(isDisabled && "opacity-50", className)}
      {...rest}
    >
      {({ pressed }) => (
        <View
          className={cn(
            "flex-row items-center justify-center",
            palette.container,
            pressed && !isDisabled && palette.pressed,
          )}
          style={{
            minHeight: metrics.minHeight,
            paddingHorizontal: metrics.paddingHorizontal,
            borderRadius: metrics.radius,
          }}
        >
          {loading ? (
            <ActivityIndicator color={palette.spinner} />
          ) : (
            <AppText
              variant="label"
              color={palette.text}
              style={{
                fontFamily: fonts.sans.semibold,
                fontSize: metrics.fontSize,
                lineHeight: metrics.lineHeight,
              }}
            >
              {label}
            </AppText>
          )}
        </View>
      )}
    </Pressable>
  );
}
