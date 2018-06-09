import Phaser from 'phaser-ce'

import Character from '../../objects/Character'

class PlayState extends Phaser.State {
  create () {
    this.player = new Character(this.game)
  }

  update () {
    this.player.update()
  }
}

export default PlayState
