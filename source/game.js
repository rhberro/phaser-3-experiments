import 'p2'
import 'pixi'
import Phaser from 'phaser-ce'

import BootState from './states/BootState'
import MenuState from './states/MenuState'
import PlayState from './states/PlayState'

class Game extends Phaser.Game {
  constructor () {
    super(800, 480, Phaser.AUTO, '', null)

    this.state.add('BootState', BootState, false)
    this.state.add('MenuState', MenuState, false)
    this.state.add('PlayState', PlayState, false)

    this.state.start('BootState')
  }
}

window.game = new Game()
