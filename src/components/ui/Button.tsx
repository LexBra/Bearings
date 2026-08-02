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
  resolveFontFamily,
  type ButtonSize,
} from "@/theme";
import { cn } from "@/utils/cn";

const variants = {
  /** Black pill, cream label — primary CTA from Figma */
  primary: {
    container: "bg-ink",
    pressed: "opacity-90",
    text: "cream" as const,
    spinner: colors.cream,
  },
  secondary: {
    container: "bg-sun",
    pressed: "opacity-90",
    text: "primary" as const,
    spinner: colors.ink,
  },
  ghost: {
    container: "bg-transparent",
    pressed: "opacity-70",
    text: "soil" as const,
    spinner: colors.soil,
  },
  danger: {
    container: "bg-signal",
    pressed: "opacity-90",
    text: "cream" as const,
    spinner: colors.cream,
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
 * Reusable Bearings button (Andale Mono labels, pill radius by default).
 */
export function Button({
  label,
  variant = "primary",
  size = "lg",
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
                fontFamily: resolveFontFamily("AndaleMono"),
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
