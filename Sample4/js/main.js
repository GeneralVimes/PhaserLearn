window.onload=function(){
class Example extends Phaser.Scene
    {
        preload ()
        {
            //this.load.setBaseURL('https://labs.phaser.io');
			//завантажуємо зображення, вказуючи їм їх коди для подальшого звернення
            this.load.image('TX_SKY', 'assets/space3.png');
            this.load.image('TX_LOGO', 'assets/phaser3-logo.png');
            this.load.image('TX_RED', 'assets/red.png');
        }


        create ()
        {
			window.main = this;
			this.world = new GameWorld();
			this.world.createObjects();

			this.input.on('pointerdown',(pointer, objectsClicked)=>{
				this.world.handleDown(pointer, objectsClicked)
			})

			this.input.keyboard.on('keydown', (evt) => {
				this.world.handleKeyDown(evt)
			})

			window.addEventListener("wheel",(evt) => {
				this.world.handleWheel(evt)
            })		
        }

		update(t,dt){
			this.world.update(t,dt)
		}		
    }

	//параметри створюваної у Phaser сцени
    const config = {
        type: Phaser.AUTO,
        width: 1000,
        height: 600,
        scene: Example,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        }
    };

    window.game = new Phaser.Game(config);
}