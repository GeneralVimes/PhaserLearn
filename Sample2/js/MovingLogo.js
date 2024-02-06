class MovingLogo extends Phaser.GameObjects.Image{
	constructor(scene, x, y, texture, frame){
		super(scene, x, y, texture, frame)

		this.vx = 100;
		this.vy = -100;
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
		if (this.x>800-this.displayWidth/2){
			this.x=800-this.displayWidth/2
			this.vx=-this.vx
		}		
		//від нижнього краю
		if (this.y>600-this.displayHeight/2){
			this.y=600-this.displayHeight/2
			this.vy=-this.vy
		}		
	}
}