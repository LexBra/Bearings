module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      // jsxImportSource lets NativeWind transform className props.
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
