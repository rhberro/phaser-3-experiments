import Phaser, { Input, Scene } from 'phaser'

import CannonBallSprite from 'assets/cannon/ball.png'
import CannonBodySprite from 'assets/cannon/body.png'
import CannonHeadSprite from 'assets/cannon/head.png'

class BootScene extends Scene {
  create () {
    setTimeout(this.switch, 200)
    this.cameras.main.setBackgroundColor('#FF0000')
  }

  preload () {
    this.load.image('CannonBall', CannonBallSprite);
    this.load.image('CannonBody', CannonBodySprite);
    this.load.image('CannonHead', CannonHeadSprite);
  }

  switch = () => {
    const sceneToStop = this.scene.get('BootScene')
    const sceneToStart = this.scene.get('MenuScene')
    sceneToStop.scene.sleep()
    sceneToStart.scene.start()
  }
}

export default BootScene
