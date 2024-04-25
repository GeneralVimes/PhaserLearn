class Level1 extends GameLevel{
	constructor(){
		super()
	}
	createStartObjects(){
		this.tx = new Phaser.GameObjects.Text(window.main,100,100,"LEvel1")
		this.add(this.tx)
	}

	handleKeyDown(evt){
		if (evt.code=="KeyW"){
			this.tx.y-=10
		}
		if (evt.code=="KeyS"){
			this.tx.y+=10
		}
	}	
}