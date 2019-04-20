import Phaser, { GameObjects } from 'phaser'

import { getAngleBetween } from 'utilities/math';

import CannonBody from 'objects/Cannon/CannonBody'
import CannonHead from 'objects/Cannon/CannonHead'

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

  constructor (scene, x, y, children) {
    super(
      scene,
      100,
      100,
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
        callback: () => console.log('shooting!'),
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
}
 
export default Cannon
