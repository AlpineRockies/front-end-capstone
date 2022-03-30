const path = require('path');
require('dotenv').config();

module.exports = {
  mode: 'development',
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'eval-cheap-module-source-map',
};
