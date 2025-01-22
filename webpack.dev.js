const path = require('path')
const config = require('./webpack.config')
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackDevServer = require('webpack-dev-server');

module.exports = merge(config, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: '[name].js',
    assetModuleFilename: 'img/[name][ext]',
    clean: true
  },
  plugins: [new MiniCssExtractPlugin()],
  devtool: false,
  devServer: {
    static: path.join(__dirname,'./src'),
    compress: true,
    port: 3000,
    liveReload: true,
  },
})