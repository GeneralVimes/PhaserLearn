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

		makeMovingLogo(lx,ly){
			let ob = new MovingLogo(this,lx,ly,'TX_LOGO')
			this.objects.push(ob)
			this.add.existing(ob)

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

        create ()
        {
            this.skyIm = this.add.image(400, 300, 'TX_SKY');
            //створюємо масив об'єктів
			this.objects = []
			for (let i=0; i<1; i++){
				//створили об'єкт
				let ob = new MovingLogo(this,400-200+400*Math.random(),300-150+300*Math.random(),'TX_LOGO')
				// додали в масив
				this.objects.push(ob)
				// додали на сцену
				this.add.existing(ob)
			}

			this.input.on('pointerdown',(pointer, objectsClicked)=>{
				console.log("pointerdown", pointer, objectsClicked)
				//давайте при натиснені на екра створювати нове рухоме лого
				this.makeMovingLogo(pointer.downX, pointer.downY)
			})

			this.input.keyboard.on('keydown', (evt) => {
				console.log("keydown", evt)
				if (evt.code=="Space"){
					this.clearAllObjects()
				}
			})

			window.addEventListener("wheel",(evt) => {
				console.log("wheel", evt)
				this.skyIm.y+=evt.deltaY*0.1
            })

			/*
            this.input
                // .setTopOnly(false) // If you want to check if more than the top most hitbox was clicked
                .on('pointerdown', (pointer, objectsClicked) => { 
                    this.handleDown(pointer, objectsClicked)
            })
                .on('pointerup', (pointer, objectsClicked) => { 
                    this.handleUp(pointer, objectsClicked) 
            })
                .on('pointermove', (pointer, objectsClicked) => { 
                    this.handleMove(pointer, objectsClicked)
            })
                .on('pointerover', (pointer, objectsClicked) => { 
                    this.handleHover(pointer, objectsClicked)
            })
                .on('gameout', (tm, evt) => { 
                    this.handleOut(tm, evt)
            })
            this.input.keyboard.on('keydown', (evt) => {
					// console.log(evt.code)
                    this.handleKeyDown(evt)
            })

			window.addEventListener("wheel",(evt) => {
					// console.log(evt.code)
                    this.handleMouseWheel(evt)
            })	*/		
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