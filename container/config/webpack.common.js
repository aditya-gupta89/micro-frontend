module.exports = {
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: {
      path: require.resolve("path-browserify"),
    },
    alias: {
      "@babel/runtime/helpers/esm/nonIterableSpread":
        "@babel/runtime/helpers/esm/nonIterableSpread.js",
      "@babel/runtime/helpers/esm/unsupportedIterableToArray":
        "@babel/runtime/helpers/esm/unsupportedIterableToArray.js",
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$|jsx/,
        exclude: /node_modules/,

        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
