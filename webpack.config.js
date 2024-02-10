const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./pages/index.css",
  module: {
    rules: [{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'production'
};
