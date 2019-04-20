import Phaser, { Input, Scene } from 'phaser'

class MenuScene extends Scene {
  create () {
    setTimeout(this.switch, 200)
    this.cameras.main.setBackgroundColor('#00FF00')
  }

  switch = () => {
    const sceneToStop = this.scene.get('MenuScene')
    const sceneToStart = this.scene.get('GameScene')
    sceneToStop.scene.sleep()
    sceneToStart.scene.start()
  }
}

export default MenuScene
