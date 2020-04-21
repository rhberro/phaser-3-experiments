import Phaser, { GameObjects } from 'phaser'

import { getAngleBetween } from 'utilities/math';

import CannonBody from 'objects/Cannon/CannonBody'
import CannonHead from 'objects/Cannon/CannonHead'
import CannonBall from 'objects/CannonBall/CannonBall';

class Cannon extends GameObjects.Container {
  /**
   * The cannon graphics.
   */
  graphics = null

  /**
   * The cooldown timer.
   */
  cooldown = null

  /**
   * The circle around the cannon.
   */
  circle = null

  /**
   * The cannon balls.
   */
  balls = []

  constructor (scene, x, y, children) {
    super(
      scene,
      scene.sys.canvas.width - 90,
      scene.sys.canvas.height - 90,
      [
        new CannonBody(scene, 0, 0),
        new CannonHead(scene, 0, 0),
      ]
    )
  }

  create () {
    this.cooldown = this.scene.time.addEvent(
      {
        delay: 2000,
        callback: this.shoot,
        callbackScope: this,
        loop: true,
      }
    )

    this.graphics = this.scene.add.graphics(
      {
        fillStyle: {
          color: 0xffffff,
          alpha: 0.3,
        }
      }
    );

    this.graphics.fillCircle(0, 0, 200)

    this.scene.add.existing(this)
  }

  update () {
    this.angle = getAngleBetween(this, this.scene.input.activePointer)
  }

  shoot = () => {
    const ball = new CannonBall(this.scene, this.x + 30, this.y + 30)
    console.log('Shooting!')
    console.log(this.x)

    this.balls = [ ...this.balls, ball ]

    ball.create()
  }
}
 
export default Cannon
