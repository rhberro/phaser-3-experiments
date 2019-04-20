const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'source'),
  output: {
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png)$/,
        loader: 'file-loader',
        options: { outputPath: 'assets/' }
      }
    ]
  },
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, './source/assets'),
      'objects': path.resolve(__dirname, './source/objects'),
      'scenes': path.resolve(__dirname, './source/scenes'),
      'utilities': path.resolve(__dirname, './source/utilities')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, 'source/index.html'),
        favicon: path.resolve(__dirname, 'source/favicon.ico')
      }
    )
  ],
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
  }
}
