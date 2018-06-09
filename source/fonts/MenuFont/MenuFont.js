import { RetroFont } from 'phaser'

class MenuFont extends RetroFont {
  constructor (game, key) {
    super(game, key, 20, 20, RetroFont.TEXT_SET1, 15)
  }
}

export default MenuFont
