import tokens from "./tokens";

/**
 * Typed Bearings theme.
 * Prefer importing from here in app code:
 *   import { theme, colors } from "@/theme";
 */
export const theme = tokens;

export const {
  colors,
  spacing,
  radii,
  shadows,
  fonts,
  textVariants,
  buttonSizes,
} = theme;

export type Theme = typeof theme;
export type ColorToken = typeof colors;
export type TextVariant = keyof typeof textVariants;
export type ButtonSize = keyof typeof buttonSizes;
export type SpacingToken = keyof typeof spacing;
export type RadiusToken = keyof typeof radii;
export type ShadowToken = keyof typeof shadows;
