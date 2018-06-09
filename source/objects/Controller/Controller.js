import { KeyCode } from 'phaser-ce'

class Controller {
  constructor (game) {
    this.game = game
  }

  isPressingA () {
    return this.game.input.keyboard.isDown(KeyCode.A)
  }

  isPressingB () {
    return this.game.input.keyboard.isDown(KeyCode.B)
  }

  isPressingX () {
    return this.game.input.keyboard.isDown(KeyCode.X)
  }

  isPressingY () {
    return this.game.input.keyboard.isDown(KeyCode.Y)
  }

  isPressingDown () {
    return this.game.input.keyboard.isDown(KeyCode.DOWN)
  }

  isPressingRight () {
    return this.game.input.keyboard.isDown(KeyCode.RIGHT)
  }

  isPressingLeft () {
    return this.game.input.keyboard.isDown(KeyCode.LEFT)
  }

  isPressingUp () {
    return this.game.input.keyboard.isDown(KeyCode.UP)
  }
}

export default Controller
