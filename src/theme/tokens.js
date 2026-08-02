/**
 * Bearings design tokens — SINGLE SOURCE OF TRUTH.
 *
 * Update values here, then NativeWind (tailwind.config.js) and
 * TypeScript components (via src/theme/index.ts) stay in sync.
 *
 * Brand direction: wayfinding / compass — deep forest green, mist surfaces,
 * brass accent, Fraunces (display) + Manrope (UI).
 */

const colors = {
  brand: {
    50: "#F1F6F3",
    100: "#E1EDE7",
    200: "#C2DBD0",
    300: "#96BDAE",
    400: "#6B8F7E",
    500: "#3F6B58",
    600: "#1F4B3A",
    700: "#183C2E",
    800: "#122E23",
    900: "#0C1F18",
    DEFAULT: "#1F4B3A",
    foreground: "#FFFFFF",
  },
  accent: {
    DEFAULT: "#C2A15A",
    soft: "#F4EBD7",
    foreground: "#2A2110",
  },
  surface: {
    DEFAULT: "#FFFFFF",
    muted: "#F5F7F6",
    sunken: "#EEF2F0",
    inverse: "#122E23",
  },
  text: {
    primary: "#14201B",
    secondary: "#3E4F47",
    muted: "#6A7A72",
    inverse: "#FFFFFF",
    brand: "#1F4B3A",
  },
  border: {
    DEFAULT: "#D5E0DA",
    strong: "#A9BDB3",
    focus: "#1F4B3A",
  },
  semantic: {
    success: "#2F6F4E",
    successSoft: "#E5F3EB",
    warning: "#A16207",
    warningSoft: "#FEF3C7",
    danger: "#B42318",
    dangerSoft: "#FEE4E2",
    info: "#175CD3",
    infoSoft: "#EFF8FF",
  },
};

const spacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  "2xl": 32,
  "3xl": 40,
  "4xl": 48,
  "5xl": 64,
};

const radii = {
  none: 0,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

/** React Native shadow styles (use with style={theme.shadows.md}). */
const shadows = {
  none: {
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: "#0C1F18",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  md: {
    shadowColor: "#0C1F18",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  lg: {
    shadowColor: "#0C1F18",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 8,
  },
};

/**
 * Font family keys must match useFonts() registrations in app/_layout.tsx.
 */
const fonts = {
  display: {
    regular: "Fraunces_400Regular",
    medium: "Fraunces_500Medium",
    semibold: "Fraunces_600SemiBold",
    bold: "Fraunces_700Bold",
  },
  sans: {
    regular: "Manrope_400Regular",
    medium: "Manrope_500Medium",
    semibold: "Manrope_600SemiBold",
    bold: "Manrope_700Bold",
  },
};

/**
 * Text style recipes (font + size + line height).
 * Consumed by <AppText variant="..." />.
 */
const textVariants = {
  display: {
    fontFamily: fonts.display.bold,
    fontSize: 40,
    lineHeight: 48,
    letterSpacing: -0.5,
  },
  title: {
    fontFamily: fonts.display.semibold,
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.3,
  },
  headline: {
    fontFamily: fonts.sans.bold,
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: -0.2,
  },
  body: {
    fontFamily: fonts.sans.regular,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },
  bodyEmphasis: {
    fontFamily: fonts.sans.semibold,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },
  label: {
    fontFamily: fonts.sans.semibold,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  caption: {
    fontFamily: fonts.sans.regular,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.1,
  },
  overline: {
    fontFamily: fonts.sans.semibold,
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
};

const buttonSizes = {
  sm: {
    minHeight: 36,
    paddingHorizontal: spacing.lg,
    radius: radii.sm,
    fontSize: 14,
    lineHeight: 20,
  },
  md: {
    minHeight: 48,
    paddingHorizontal: spacing.xl,
    radius: radii.md,
    fontSize: 16,
    lineHeight: 24,
  },
  lg: {
    minHeight: 56,
    paddingHorizontal: spacing["2xl"],
    radius: radii.lg,
    fontSize: 17,
    lineHeight: 24,
  },
};

module.exports = {
  colors,
  spacing,
  radii,
  shadows,
  fonts,
  textVariants,
  buttonSizes,
};
