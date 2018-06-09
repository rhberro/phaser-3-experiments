import Phaser from 'phaser'

class PlayState extends Phaser.State {
  create () {
    this.createWorld()
    this.createMap()
    this.createPlayer()
  }

  createWorld () {
    this.physics.startSystem(Phaser.Physics.ARCADE)
    this.world.enableBody = true
  }

  createMap () {
    this.tilemap = this.add.tilemap('PlayState__Tilemap')
    this.tilemap.addTilesetImage('tileset-1', 'PlayState__Tileset')
    this.tilemap.setCollisionBetween(0, 27)
    this.layer = this.tilemap.createLayer('Floor')
    this.layer.resizeWorld()
  }

  createPlayer () {
    this.player = this.add.sprite(100, 100, 'PlayState__Character')

    this.physics.enable(this.player, Phaser.Physics.ARCADE)

    this.player.body.gravity.y = 1400
    this.player.body.collideWorldBounds = true

    this.player.anchor.setTo(0.5, 0.5)

    this.camera.follow(this.player)

    this.createPlayerAnimations()
  }

  createPlayerAnimations () {
    this.player.animations.add('idle', [0, 1, 2, 3, 4, 5], 5, true)
    this.player.animations.add('left', [0, 1, 2, 3, 4, 5], 5, true)
    this.player.animations.add('right', [0, 1, 2, 3, 4, 5], 5, true)
    this.player.animations.add('jumping', [0, 1, 2, 3, 4, 5], 5, true)
    this.player.animations.add('falling', [0, 1, 2, 3, 4, 5], 5, true)
  }

  update () {
    this.checkCollisions()
    this.checkMovements()
    this.checkAnimations()
  }

  checkCollisions () {
    this.physics.arcade.collide(this.player, this.layer)
  }

  checkMovements () {
    this.player.body.velocity.x = 0

    const isWalkingRight = this.game.input.keyboard.isDown(Phaser.KeyCode.RIGHT)
    if (isWalkingRight) {
      this.player.body.velocity.x = 300
    }

    const isWalkingLeft = this.game.input.keyboard.isDown(Phaser.KeyCode.LEFT)
    if (isWalkingLeft) {
      this.player.body.velocity.x = -300
    }

    const isJumping = this.game.input.keyboard.isDown(Phaser.KeyCode.UP)
    if (isJumping) {
      if (this.player.body.onFloor() || this.player.body.touching.down) {
        this.player.body.velocity.y = -500
      }
    }
  }

  checkAnimations () {
    if (this.player.body.velocity.x === 0) {
      this.player.animations.play('idle')
    }
    if (this.player.body.velocity.x > 0) {
      this.player.scale.x = 1
      this.player.animations.play('right')
    }
    if (this.player.body.velocity.x < 0) {
      this.player.scale.x = -1
      this.player.animations.play('left')
    }
    if (this.player.body.velocity.y > 0) {
      this.player.animations.play('jumping')
    }
    if (this.player.body.velocity.y < 0) {
      this.player.animations.play('falling')
    }
  }
}

export default PlayState
