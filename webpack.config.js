const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = resolve(`${__dirname}/src`);
const dist = resolve(`${__dirname}/dist`);

module.exports = {
  devtool: '#inline-source-map',
  context: src,
  entry: './js/index.ts',
  output: {
    path: dist,
    filename: 'budle.js'
  },
  resolve: {
    modules: [src, 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  devServer: {
    contentBase: dist,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env']]
            }
          },
          { loader: 'ts-loader' }
        ]
      },
      {
        enforce: 'pre',
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: [{ loader: 'eslint-loader' }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './html/index.html'
    })
  ]
};
