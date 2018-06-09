import Phaser from 'phaser'

import Character from '../../assets/characters/character-1.png'
import Tileset from '../../assets/tilesets/tileset-1.png'
import Tilemap from '../../assets/maps/map1/map-11.json'

class MenuState extends Phaser.State {
  init () {
    this.background = this.add.tileSprite(0, 0, this.world.width, this.world.height, 'MenuState__Background')
    this.music = this.add.audio('MenuState__Music')
  }

  preload () {
    this.load.spritesheet('PlayState__Character', Character, 64, 64, 7)
    this.load.image('PlayState__Tileset', Tileset)
    this.load.tilemap('PlayState__Tilemap', Tilemap, null, Phaser.Tilemap.TILED_JSON)
  }

  create () {
    this.music.loopFull(1)
  }

  update () {
    this.animateBackground()
    this.checkInteractions()
  }

  animateBackground () {
    this.background.tilePosition.x = this.background.tilePosition.x - 5
  }

  checkInteractions () {
    const isPressing = this.game.input.keyboard.isDown(Phaser.KeyCode.A)
    if (isPressing) return this.changeState()
  }

  changeState () {
    this.music.stop()
    this.state.start('PlayState')
  }
}

export default MenuState
