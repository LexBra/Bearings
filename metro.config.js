const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// NativeWind compiles Tailwind classes from global.css at bundle time.
module.exports = withNativeWind(config, { input: "./global.css" });
