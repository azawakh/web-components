const { resolve } = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = resolve(`${__dirname}/src`);
const dist = resolve(`${__dirname}/dist`);

module.exports = {
  devtool: '#inline-source-map',
  context: src,
  entry: './js/index.js',
  output: {
    path: dist,
    filename: 'budle.js'
  },
  resolve: {
    modules: [src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
    contentBase: dist,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env']]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './html/index.html'
    })
  ]
};
