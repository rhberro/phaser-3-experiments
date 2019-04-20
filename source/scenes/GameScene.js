import Phaser, { Scene } from 'phaser'

import Cannon from 'objects/Cannon';

class GameScene extends Scene {
  create () {
    this.cannon = new Cannon(this, 100, 100)
    this.cannon.create()
  }

  update () {
    this.cannon.update()
  }
}

export default GameScene
