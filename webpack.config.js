const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'source/game.js'),
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      // Required (Phaser).
      { test: /pixi\.js$/, loader: 'expose-loader?PIXI' },
      { test: /phaser-split\.js$/, loader: 'expose-loader?Phaser' },
      { test: /p2\.js$/, loader: 'expose-loader?p2' },

      { test: /\.(png|ogg|json)$/, loader: 'file-loader', options: { outputPath: 'assets/' } }
    ]
  },
  resolve: {
    alias: {
      // Required (Phaser).
      'phaser': path.join(__dirname, '/node_modules/phaser-ce/build/custom/phaser-split.js'),
      'pixi': path.join(__dirname, '/node_modules/phaser-ce/build/custom/pixi.js'),
      'p2': path.join(__dirname, '/node_modules/phaser-ce/build/custom/p2.js'),

      'assets': path.join(__dirname, '/source/assets/')
    }
  },
  devtool: 'eval-cheap-module-source-map'
}
