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
			//створюємо зображення з кодом TX_SKY по центру екрана (400,300)
            this.add.image(400, 300, 'TX_SKY');

            const particles = this.add.particles(0, 0, 'TX_RED', {
                speed: 100,
                scale: { start: 1, end: 0 },
                blendMode: 'ADD'
            });

            const logo = this.physics.add.image(400, 100, 'TX_LOGO');
			
            logo.setVelocity(100, 200);
            logo.setBounce(1, 1);
            logo.setCollideWorldBounds(true);
			

            particles.startFollow(logo);
        }
    }

	//параметри створюваної у Phaser сцени
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: Example,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        }
    };

    const game = new Phaser.Game(config);
}