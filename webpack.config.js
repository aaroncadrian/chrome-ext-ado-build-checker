const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    background: './extension/background/index.ts',
    popup: './popup.js',
    'find-version-meta.content':
      './extension/content-scripts/find-version-meta.content.js',
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
