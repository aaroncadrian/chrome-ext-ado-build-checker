const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    background: './background.js',
    popup: './popup.js',
    'find-version-meta.content': './find-version-meta.content.js',
    'get-build-info.background': './extension/background/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'manifest.json',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'popup.html'),
      filename: 'popup.html',
      chunks: ['popup'],
    }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
};
