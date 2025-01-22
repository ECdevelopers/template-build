const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: "./app/index.js",
    vendor: "./app/vendor.js",
    hello: "./app/hello.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: [["@babel/preset-env"]],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
          test: /\.html$/i,
          loader: "html-loader",
      },
      {
        test: /\.(png,jp?g,gif,svg)$/i,
       type: 'asset/source',
      }
    ],
  },
};
