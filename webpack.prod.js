
const path = require('path')
const config = require('./webpack.config')
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: 'bundle-[contenthash].js',
    clean: true
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'main-[contenthash].css',
   
  })]

})