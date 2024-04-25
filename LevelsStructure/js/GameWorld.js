class GameWorld{
	constructor(){
		this.currentLevel = null;

		this.levelsClasses=[Level1, Level2];

		this.startRandomLevel();
	}

	startRandomLevel(){
		let levelId = Math.floor(Math.random()*this.levelsClasses.length)//обираємо рандомний номер
		let levelClass = this.levelsClasses[levelId]//визначаємо клас цього левела
		this.currentLevel = new levelClass();
		window.main.add.existing(this.currentLevel)

		this.currentLevel.createStartObjects()
	}

	update(t,dt){
		//пробігаємося по всіх об'єктах та рухаємо їх
		if (this.currentLevel){
			this.currentLevel.update(t,dt)
		}	
	}

	handleDown(pointer, objectsClicked){
		console.log("pointerdown", pointer, objectsClicked)
		if (this.currentLevel){
			this.currentLevel.handleDown(pointer, objectsClicked)
		}	
	}

	handleKeyDown(evt){
		console.log("keydown", evt)
		if (this.currentLevel){
			this.currentLevel.handleKeyDown(evt)
		}	
	}

	handleWheel(evt){
		console.log("wheel", evt)
		if (this.currentLevel){
			this.currentLevel.handleWheel(evt)
		}	
	}

	react2Resize(){
		if (this.currentLevel){
			this.currentLevel.react2Resize()
		}	
	}

}