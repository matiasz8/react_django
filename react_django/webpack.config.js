const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry:  path.resolve('./assets/src/js/index'),
  output: {
    path: path.resolve('./assets/dist/'),
    filename: '[name]-[fullhash].js',
    publicPath: "assets/dist/"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleTracker({
      path: __dirname,
      filename: './webpack-stats.json'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}