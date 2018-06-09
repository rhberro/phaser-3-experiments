import Phaser from 'phaser'

class BaseState extends Phaser.State {
  init () {
    this.beforeInit && this.beforeInit()
    this.overlay = {
      draw: this.game.add.graphics(0, 0),
      isInitializing: true,
      isDestroying: false,
      isDestroyed: false,
      nextState: null
    }
    this.overlay.draw.beginFill('0x000000')
    this.overlay.draw.drawRect(0, 0, this.world.width, this.world.height)
    this.overlay.draw.endFill()
    this.afterInit && this.afterInit()
  }

  update () {
    this.beforeUpdate && this.beforeUpdate()
    if (this.overlay.isInitializing) return this.updateInitialization()
    if (this.overlay.isDestroying) return this.updateDestruction()
    if (this.overlay.isDestroyed) return this.state.start(this.overlay.nextState)
    this.afterUpdate && this.afterUpdate()
  }

  updateInitialization () {
    if (this.overlay.draw.alpha <= 0) {
      this.overlay.isInitializing = false
    }
    this.overlay.draw.alpha = this.overlay.draw.alpha - 0.05
  }

  updateDestruction () {
    if (this.overlay.draw.alpha >= 1) {
      this.overlay.isDestroying = false
      this.overlay.isDestroyed = true
    }
    this.overlay.draw.alpha = this.overlay.draw.alpha + 0.05
  }

  changeStateSmoothly (nextState) {
    this.overlay.isDestroying = true
    this.overlay.nextState = nextState
  }
}

export default BaseState
