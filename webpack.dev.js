const path = require('path')
const config = require('./webpack.config')
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(config, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: 'bundle.js',
    clean: true
  },
  plugins: [new MiniCssExtractPlugin()],
  devtool: false,
 
})