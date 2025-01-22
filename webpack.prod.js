
const path = require('path')
const glob = require("glob");
const config = require('./webpack.config')
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "src"),
};

module.exports = merge(config, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: '[name]-[contenthash].js',
    assetModuleFilename: 'img/[name]-[hash][ext]',
    clean: true
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.svgoMinify,
          options: {
            encodeOptions: {
              // Pass over SVGs multiple times to ensure all optimizations are applied. False by default
              multipass: true,
              plugins: [
                // set of built-in plugins enabled by default
                // see: https://github.com/svg/svgo#default-preset
                "preset-default",
              ],
            },
          },
        },
      }),

    ],
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'main-[contenthash].css',
  }),
  new PurgeCSSPlugin({
    paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
  }),
]
})