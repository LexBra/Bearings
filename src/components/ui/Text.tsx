import { Text as RNText, type TextProps as RNTextProps } from "react-native";

import {
  colors,
  resolveFontFamily,
  textVariants,
  type TextVariant,
} from "@/theme";
import { cn } from "@/utils/cn";

const colorMap = {
  primary: colors.text.primary,
  secondary: colors.text.secondary,
  muted: colors.text.muted,
  inverse: colors.text.inverse,
  brand: colors.text.brand,
  accent: colors.accent.DEFAULT,
  danger: colors.semantic.danger,
  success: colors.semantic.success,
  cream: colors.cream,
  soil: colors.soil,
} as const;

export type AppTextColor = keyof typeof colorMap;

export type AppTextProps = RNTextProps & {
  variant?: TextVariant;
  color?: AppTextColor;
  className?: string;
  center?: boolean;
};

/**
 * Reusable Bearings text.
 * Headers = Akshar · Subheads = DM Sans Bold caps · Body = Andale Mono
 */
export function AppText({
  variant = "body",
  color = "primary",
  className,
  center = false,
  style,
  children,
  ...rest
}: AppTextProps) {
  const recipe = textVariants[variant];

  return (
    <RNText
      className={cn(center && "text-center", className)}
      style={[
        {
          fontFamily: resolveFontFamily(recipe.fontFamily),
          fontSize: recipe.fontSize,
          lineHeight: recipe.lineHeight,
          letterSpacing: recipe.letterSpacing,
          textTransform: recipe.textTransform,
          color: colorMap[color],
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
}
