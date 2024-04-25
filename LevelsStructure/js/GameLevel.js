class GameLevel extends Phaser.GameObjects.Container{
	constructor(){
		super(window.main,0,0);
	}
	createStartObjects(){
		//тут ми маємо стровити об'єкти левела	
	}
	checkVictory(){
		//перевіряється, чи пройдено левел
	}

	//що левел має робити при зовнішніх подіях
	//плин часу
	update(t,dt){
		//пробігаємося по всіх об'єктах та рухаємо їх
	}
	//натискання миші
	handleDown(pointer, objectsClicked){
	
	}
	//натискання клавіши
	handleKeyDown(evt){

	}
	//прокрутка колеса
	handleWheel(evt){

	}
	//зміна розміру екрана
	react2Resize(){

	}	
}