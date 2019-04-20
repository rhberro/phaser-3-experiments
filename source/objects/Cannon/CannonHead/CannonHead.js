import Phaser, { GameObjects } from 'phaser'

class CannonHead extends GameObjects.Sprite {
  constructor (scene, x, y) {
    super(scene, x, y, 'CannonHead')
    this.setOrigin(0.5, 1)
    this.setTint('0x00ff00')
  }
}
 
export default CannonHead
