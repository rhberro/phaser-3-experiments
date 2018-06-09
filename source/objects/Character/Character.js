import Phaser from 'phaser-ce'

class Character extends Phaser.Sprite {
  constructor (game, initialize = true) {
    super(game, 100, 100, 'PlayState__Character')
    if (initialize) this.initialize()
  }

  initialize () {
    this.initializeVariables()
    this.initializePhysics()
    this.initializeAnimations()
    this.initializeMiscellaneous()
    this.game.add.existing(this)
  }

  initializeVariables () {
    this.maxVelocity = 400
    this.jumpStrenght = 500
    this.friction = 30
    this.velocityForce = 40
  }

  initializePhysics () {
    this.game.physics.enable(this, Phaser.Physics.ARCADE)
    this.body.gravity.y = 1400
    this.body.collideWorldBounds = true
  }

  initializeMiscellaneous () {
    this.anchor.setTo(0.5, 0.5)
    this.game.camera.follow(this)
  }

  initializeAnimations () {
    this.animations.add('idle', [0, 1, 2, 3, 4, 5], 5, true)
    this.animations.add('left', [0, 1, 2, 3, 4, 5], 5, true) // walking.
    this.animations.add('right', [0, 1, 2, 3, 4, 5], 5, true) // walking.
    this.animations.add('jumping', [0, 1, 2, 3, 4, 5], 5, true)
    this.animations.add('falling', [0, 1, 2, 3, 4, 5], 5, true)
  }

  update () {
    this.checkAnimations()
    this.checkMovements()
  }

  checkAnimations () {
    this.animations.play('idle', 8, true) // fallback.

    if (this.body.velocity.x > 0) {
      this.scale.x = 1
      this.animations.play('right', 8, true)
    }
    if (this.body.velocity.x < 0) {
      this.scale.x = -1
      this.animations.play('left', 8, true)
    }
    if (this.body.velocity.y > 0) {
      this.animations.play('jumping', 8, true)
    }
    if (this.body.velocity.y < 0) {
      this.animations.play('falling', 8, true)
    }
  }

  checkMovements () {
    const isPressingRight = this.game.input.keyboard.isDown(Phaser.KeyCode.RIGHT)
    const isPressingLeft = this.game.input.keyboard.isDown(Phaser.KeyCode.LEFT)
    const isPressingJump = this.game.input.keyboard.isDown(Phaser.KeyCode.UP)

    const isIdle = this.body.velocity.x === 0
    const isSafelyOnFloor = this.body.onFloor() || this.body.touching.down
    const absoluteVelocity = Math.abs(this.body.velocity.x)

    // friction.
    if (!isIdle && isSafelyOnFloor) {
      this.body.velocity.x += Math.sign(this.body.velocity.x) * -this.friction
    }

    // velocity.
    if (absoluteVelocity >= this.maxVelocity) {
      this.body.velocity.x = Math.sign(this.body.velocity.x) * this.maxVelocity
    }

    // controllers.
    if (!isSafelyOnFloor) return
    if (isPressingRight) this.body.velocity.x += this.velocityForce
    if (isPressingLeft) this.body.velocity.x -= this.velocityForce
    if (isPressingJump) this.body.velocity.y = -this.jumpStrenght
  }
}

export default Character
