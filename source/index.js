import Phaser from 'phaser'

import BootScene from 'scenes/BootScene'
import GameScene from 'scenes/GameScene'
import MenuScene from 'scenes/MenuScene'

class Game extends Phaser.Game {
  constructor () {
    super(
      {
        type: Phaser.AUTO,
        width: 640, 
        height: 320, 
        backgroundColor: '#a3e6d1',
        antialias: false,
        physics: {
          default: 'arcade',
          arcade: {
            debug: true,
          }
        },
        plugins: {
          global: [
            {
              start: true,
              key: 'bulletPlugin',
            }
          ]
        },
      }
    )

    // Scenes.
    this.scene.add('BootScene', BootScene);
    this.scene.add('MenuScene', MenuScene);
    this.scene.add('GameScene', GameScene);

    this.scene.start('BootScene');
  }
}

new Game()
