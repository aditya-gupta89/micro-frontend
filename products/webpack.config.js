const HtmlWebpackPlugin = require("html-webpack-plugin");
const { dependencies } = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsIndex": "./src/bootstrap",
      },
      shared: ["faker"],
      //  when we shared the dependencies then it is install only one time and shared between different application
      // Sometimes it is create the issue because when you want to run the app then it will throw the error because dependencies will install asycn first fill will not able to load that why we need to run the code in separate file so that application can run
      // when same dependencies have different version then it will install both the dependencies shared will not work
      // if you want to make single copy  the fact you know dependencies have different package then we need to use singleton logic it will make one copy and will throw the warning the other version
      // shared: {
      //   faker: {
      //     singleton: true,
      //   },
      // },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
