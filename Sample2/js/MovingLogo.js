class MovingLogo extends Phaser.GameObjects.Image{
	constructor(scene, x, y, texture, frame){
		super(scene, x, y, texture, frame)

		this.vx = 100;
		this.vy = -100;

		this.scale = 0.1+0.4*Math.random();
	}

	step(dt){
		this.x+=this.vx*dt*0.001;
		this.y+=this.vy*dt*0.001;
		//відбиття від лівого краю
		if (this.x<this.displayWidth/2){
			this.x=this.displayWidth/2
			this.vx=-this.vx
		}
		//від верхнього краю
		if (this.y<this.displayHeight/2){
			this.y=this.displayHeight/2
			this.vy=-this.vy
		}
		//від правого краю
		if (this.x>window.game.config.width-this.displayWidth/2){
			this.x=window.game.config.width-this.displayWidth/2
			this.vx=-this.vx
		}		
		//від нижнього краю
		if (this.y>window.game.config.height-this.displayHeight/2){
			this.y=window.game.config.height-this.displayHeight/2
			this.vy=-this.vy
		}		
	}
}