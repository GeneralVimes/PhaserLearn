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
            //створюємо масив об'єктів
			this.objects = []
			for (let i=0; i<100; i++){
				//створили об'єкт
				let ob = new MovingLogo(this,400-200+400*Math.random(),300-150+300*Math.random(),'TX_LOGO')
				// додали в масив
				this.objects.push(ob)
				// додали на сцену
				this.add.existing(ob)
			}
        }

		update(t,dt){
			//пробігаємося по всіх об'єктах та рухаємо їх
			for (let i=0; i<this.objects.length; i++){
				this.objects[i].step(dt)
			}
			
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