import Phaser, { GameObjects } from 'phaser'

class CannonBall extends GameObjects.Container {
  constructor (scene, x, y) {
    super(
      scene,
      100,
      100,
      [
        new GameObjects.Sprite(scene, x, y, 'CannonBall')
      ]
    )
  }

  create () {
    console.log('Adding!')
    this.scene.add.existing(this)
  }
}
 
export default CannonBall
