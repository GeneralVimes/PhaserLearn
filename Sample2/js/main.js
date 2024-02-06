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
            this.add.image(400, 300, 'TX_SKY');
            // this.logoIm = this.add.image(400, 300, 'TX_LOGO');

			//створюємо об'єкт
			this.movingLogo = new MovingLogo(this,400,300,'TX_LOGO')
			// додаємо його на сцену
			this.add.existing(this.movingLogo)
        }

		update(t,dt){
			// this.logoIm.x+=1;
			// this.logoIm.y-=1;
			this.movingLogo.step(dt)
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