/**
 * Bearings design tokens — SINGLE SOURCE OF TRUTH.
 *
 * Update values here; NativeWind (tailwind.config.js) and
 * TypeScript components (src/theme/index.ts) stay in sync.
 *
 * Brand palette from Figma:
 *   #010000  #fffce2  #ed3e0b  #fff6a5  #cde9f9  #b2aa4b  #5a302a
 *
 * Typography:
 *   Headers  → Akshar Bold
 *   Subheads → DM Sans Bold (uppercase)
 *   Body/UI  → Andale Mono (system), with monospace fallbacks
 */

const colors = {
  ink: "#010000",
  cream: "#fffce2",
  signal: "#ed3e0b",
  sun: "#fff6a5",
  sky: "#cde9f9",
  moss: "#b2aa4b",
  soil: "#5a302a",

  brand: {
    DEFAULT: "#010000",
    foreground: "#fffce2",
    soft: "#fffce2",
    muted: "#5a302a",
  },
  accent: {
    DEFAULT: "#ed3e0b",
    soft: "#fff6a5",
    sky: "#cde9f9",
    moss: "#b2aa4b",
    foreground: "#fffce2",
  },
  surface: {
    DEFAULT: "#fffce2",
    muted: "#fff6a5",
    sunken: "#cde9f9",
    inverse: "#010000",
  },
  text: {
    primary: "#010000",
    secondary: "#5a302a",
    muted: "#5a302a",
    inverse: "#fffce2",
    brand: "#010000",
  },
  border: {
    DEFAULT: "#5a302a",
    strong: "#010000",
    focus: "#ed3e0b",
  },
  semantic: {
    success: "#b2aa4b",
    successSoft: "#fff6a5",
    warning: "#ed3e0b",
    warningSoft: "#fff6a5",
    danger: "#ed3e0b",
    dangerSoft: "#fff6a5",
    info: "#5a302a",
    infoSoft: "#cde9f9",
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

const shadows = {
  none: {
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: "#010000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  md: {
    shadowColor: "#010000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  lg: {
    shadowColor: "#010000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 8,
  },
};

/**
 * Font family keys.
 * - header/subhead names match useFonts() in app/_layout.tsx
 * - mono uses system Andale Mono on iOS; monospace elsewhere
 */
const fonts = {
  header: "Akshar_700Bold",
  subhead: "DMSans_700Bold",
  // Resolved at runtime in src/theme/fonts.ts for Platform-correct mono.
  mono: "AndaleMono",
};

const textVariants = {
  /** Headers — Akshar */
  display: {
    fontFamily: fonts.header,
    fontSize: 48,
    lineHeight: 52,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  title: {
    fontFamily: fonts.header,
    fontSize: 40,
    lineHeight: 44,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  /** Subheads — DM Sans Bold, all caps */
  headline: {
    fontFamily: fonts.subhead,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  /** Body / buttons — Andale Mono (system) */
  body: {
    fontFamily: fonts.mono,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },
  bodyEmphasis: {
    fontFamily: fonts.mono,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },
  label: {
    fontFamily: fonts.mono,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  caption: {
    fontFamily: fonts.mono,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0,
  },
  overline: {
    fontFamily: fonts.subhead,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },
};

const buttonSizes = {
  sm: {
    minHeight: 40,
    paddingHorizontal: spacing.lg,
    radius: radii.full,
    fontSize: 13,
    lineHeight: 18,
  },
  md: {
    minHeight: 52,
    paddingHorizontal: spacing.xl,
    radius: radii.full,
    fontSize: 15,
    lineHeight: 20,
  },
  lg: {
    minHeight: 56,
    paddingHorizontal: spacing["2xl"],
    radius: radii.full,
    fontSize: 16,
    lineHeight: 22,
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
