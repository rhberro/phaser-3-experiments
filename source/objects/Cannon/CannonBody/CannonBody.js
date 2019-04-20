import Phaser, { GameObjects } from 'phaser'

class CannonBody extends GameObjects.Sprite {
  constructor (scene, x, y) {
    super(scene, x, y, 'CannonBody')
    this.setOrigin(0.5, 0)
    this.setTint('0x00ff00')
  }
}
 
export default CannonBody
