class Level2 extends GameLevel{
	constructor(){
		super()
	}
	createStartObjects(){
		this.tx = new Phaser.GameObjects.Text(window.main,100,100,"LEvel2")
		this.add(this.tx)
	}	
	handleWheel(evt){
		if (evt.deltaY<0){
			this.tx.y-=10
		}
		if (evt.deltaY>0){
			this.tx.y+=10
		}
	}
}