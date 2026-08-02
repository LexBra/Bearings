import { fontFamilies, resolveFontFamily } from "./fonts";
import tokens from "./tokens";

/**
 * Typed Bearings theme.
 * Prefer: import { theme, colors, fontFamilies } from "@/theme";
 */
export const theme = {
  ...tokens,
  fonts: {
    ...tokens.fonts,
    ...fontFamilies,
  },
};

export const {
  colors,
  spacing,
  radii,
  shadows,
  textVariants,
  buttonSizes,
} = theme;

export { fontFamilies, resolveFontFamily };

export type Theme = typeof theme;
export type ColorToken = typeof colors;
export type TextVariant = keyof typeof textVariants;
export type ButtonSize = keyof typeof buttonSizes;
export type SpacingToken = keyof typeof spacing;
export type RadiusToken = keyof typeof radii;
export type ShadowToken = keyof typeof shadows;
