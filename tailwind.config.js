/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scan every file that may contain className strings.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // Design tokens will be filled in from Figma in a later step.
      colors: {
        brand: {
          DEFAULT: "#1F4B3A",
          muted: "#6B8F7E",
          soft: "#E8F0EC",
        },
      },
    },
  },
  plugins: [],
};
