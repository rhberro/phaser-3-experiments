import Phaser from 'phaser'

import Background from 'assets/backgrounds/background-1.png'
import Font from 'assets/fonts/font-1.png'
import Music from 'assets/music/theme-1.ogg'

class BootState extends Phaser.State {
  init () {
    this.stage.backgroundColor = '0x000000'
  }

  preload () {
    this.load.image('MenuState__Background', Background)
    this.load.image('MenuState__Font', Font)
    this.load.audio('MenuState__Music', [Music])
  }

  create () {
    setTimeout(this.simulate.bind(this), 200)
  }

  simulate () {
    this.state.start('MenuState')
  }
}

export default BootState
