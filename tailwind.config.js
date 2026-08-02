const {
  colors,
  spacing,
  radii,
  fonts,
} = require("./src/theme/tokens");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: colors.brand,
        accent: colors.accent,
        surface: colors.surface,
        ink: colors.text,
        line: colors.border,
        success: {
          DEFAULT: colors.semantic.success,
          soft: colors.semantic.successSoft,
        },
        warning: {
          DEFAULT: colors.semantic.warning,
          soft: colors.semantic.warningSoft,
        },
        danger: {
          DEFAULT: colors.semantic.danger,
          soft: colors.semantic.dangerSoft,
        },
        info: {
          DEFAULT: colors.semantic.info,
          soft: colors.semantic.infoSoft,
        },
      },
      spacing,
      borderRadius: radii,
      fontFamily: {
        display: [fonts.display.regular],
        "display-medium": [fonts.display.medium],
        "display-semibold": [fonts.display.semibold],
        "display-bold": [fonts.display.bold],
        sans: [fonts.sans.regular],
        "sans-medium": [fonts.sans.medium],
        "sans-semibold": [fonts.sans.semibold],
        "sans-bold": [fonts.sans.bold],
      },
    },
  },
  plugins: [],
};
