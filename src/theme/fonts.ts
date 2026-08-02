import { Platform } from "react-native";

import tokens from "./tokens";

/**
 * Platform-correct font family names.
 * Andale Mono ships on Apple platforms; Android/web fall back to monospace stacks.
 */
export const fontFamilies = {
  header: tokens.fonts.header,
  subhead: tokens.fonts.subhead,
  mono: Platform.select({
    ios: "Andale Mono",
    macos: "Andale Mono",
    android: "monospace",
    web: '"Andale Mono", "Courier New", monospace',
    default: "monospace",
  }) as string,
};

export function resolveFontFamily(tokenName: string): string {
  if (tokenName === tokens.fonts.mono || tokenName === "AndaleMono") {
    return fontFamilies.mono;
  }
  return tokenName;
}
