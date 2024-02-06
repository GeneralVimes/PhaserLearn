class GameWorld{
	constructor(){
		
	}

	createObjects(){
        this.skyIm = window.main.add.image(400, 300, 'TX_SKY');
        //створюємо масив об'єктів
		this.objects = []
		for (let i=0; i<1; i++){
			let ob = this.makeMovingLogo(400-200+400*Math.random(),300-150+300*Math.random())
		}	
	}

	makeMovingLogo(lx,ly){
		//створили об'єкт
		let ob = new MovingLogo(window.main,lx,ly,'TX_LOGO')
		// додали в масив
		this.objects.push(ob)
		// додали на сцену
		window.main.add.existing(ob)
		return ob
	}

    clearAllObjects (){
		console.log("clearAllObjects")
		//пробігаємося по об'єктах
		for (let i=this.objects.length-1; i>=0; i--){
			let ob = this.objects[i]
			//прибираємо їх з відображення
			ob.removeFromDisplayList()
		}
		//очищаємо список
		this.objects.length=0;
	}	

	update(t,dt){
		//пробігаємося по всіх об'єктах та рухаємо їх
		for (let i=0; i<this.objects.length; i++){
			this.objects[i].step(dt)
		}
	}

	handleDown(pointer, objectsClicked){
		console.log("pointerdown", pointer, objectsClicked)
		//давайте при натиснені на екра створювати нове рухоме лого
		this.makeMovingLogo(pointer.downX, pointer.downY)	
	}

	handleKeyDown(evt){
		console.log("keydown", evt)
		if (evt.code=="Space"){
			this.clearAllObjects()
		}
	}

	handleWheel(evt){
		console.log("wheel", evt)
		this.skyIm.y+=evt.deltaY*0.1	
	}

	react2Resize(){
	
	}

}