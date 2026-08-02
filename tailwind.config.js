const { colors, spacing, radii, fonts } = require("./src/theme/tokens");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        ink: colors.ink,
        cream: colors.cream,
        signal: colors.signal,
        sun: colors.sun,
        sky: colors.sky,
        moss: colors.moss,
        soil: colors.soil,
        brand: colors.brand,
        accent: colors.accent,
        surface: colors.surface,
        text: colors.text,
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
        header: [fonts.header],
        subhead: [fonts.subhead],
        mono: [fonts.mono, "monospace"],
      },
    },
  },
  plugins: [],
};
