

//--//--//--//--//--//--//--//--Objects and variables //--//--//--//--//--//--//--//--

//create objects for Player 1 and PLayer2
class User {
	constructor(name, sign, score, yourTurn, elementId) {
		this.name = name;
		this.sign = sign;
		this.score = score;
		this.yourTurn = yourTurn;
		this.elementId = elementId;
	}
}
	let Player1 = new User("Player 1", " ", 0, true, "player1score");
	let Player2 = new User("Player 2", " ", 0, false, "player2score");

//variables
let currentPlayer = Player1;  
let gameSigns = ["X", "O"];
let round = 1; 


//--//--//--//--//--//--//--//--STarting the game //--//--//--//--//--//--//--//--

//function that reactivates by clicking "start" button.  
//Choose which sign will player 1 have and give remaining to Player 2
function start(elements, chosenElPlace, remainElPlace) {
//Randomly give X or O to a player. Use randomize() function
//print chosen gameSign and print it as a player 1
	let signs = elements;
	const chosenSign = randomize(elements);
	changeOnScreen(chosenSign, chosenElPlace);
//Assign the sign to Player1 object 
	Player1.sign = chosenSign;
//print gameSign that is left for player 2.
	let otherSign = removeElement(chosenSign, signs);
	changeOnScreen(otherSign, remainElPlace);
//Assign the sign to Player2 object 	
	Player2.sign = otherSign[0];
	const button = document.getElementById('startbutton');
	button.disabled = true;
}

//make each cell to an object  
class Cell {
    constructor(value, empty, color, win) {
        this.value = value;
        this.empty = empty;
        this.color = color;
        this.win = win;
    }
   
}
		let a1 = new Cell(" ", true, "grey", false);
		let a2 = new Cell(" ", true, "grey", false);
		let a3 = new Cell(" ", true, "grey", false);
		let b1 = new Cell(" ", true, "grey", false);
		let b2 = new Cell(" ", true, "grey", false);
		let b3 = new Cell(" ", true, "grey", false);
		let c1 = new Cell(" ", true, "grey", false);
		let c2 = new Cell(" ", true, "grey", false);
		let c3 = new Cell(" ", true, "grey", false);

//Creating an array with objects values

//Racting on a clicked button and performing a move 
function buttonClicked(player, where, obj){
	if(obj.empty === true){
	//Print on a screen chosen sign of the current player
	 	changeOnScreen(player.sign, where);
	//Change turn
	 	changePlayer(player);
	//change empty to false
	 	obj.empty = false;
	//add the sign as a value to the object connected to the cell
		obj.value = player.sign;
	//check if there is a win 
		if (checkIfWin() === true){
			//if there is a win print congratulation and add scores
			let respond = confirm("Congratulation you have won! Do you want to play again?");
				if (respond == true) {
  				player.score = player.score +1;
  				let currentScore = player.score;
  				console.log(currentScore);
  				//let currentScore = addPoints(player, player.score);
				changeOnScreen(currentScore, player.elementId);
				round++;
				clearTheBoard();
				changeOnScreen(round ,"roundId");
				} else {
  				resetGame();
				}

	//check if there is a draw
		}else if(checkIfDraw() === false){
			let draw = confirm("It's a draw. Do you want to play again?");
				if (draw == true) {
					playAgainDraw();
				}else {
					resetGame();
				}
		}	

	}
}



//functions:
//function that will randomly choose an element
 function randomize(elements) {
    let randomSign = Math.floor(Math.random() * elements.length);
    return elements[randomSign];
  }
 //Function that change text on screen of specific elements 
 function changeOnScreen(what, where) {
	return document.getElementById(where).innerHTML = what; 
};
//Function that removes chosen element from an array
function removeElement(toRemove, fromWhere) {
	let arrAfterRemoved = fromWhere;
	let tempArr = arrAfterRemoved.splice(arrAfterRemoved.indexOf(toRemove), 1);
	return arrAfterRemoved;
}
//Function that checks if the value of an object is empty
function checkIfEmpty(obj){
	if(obj.value === " "){
		return true
	}else{
		return false
		}
	};
//function that will change turn of a player
function changePlayer(player){
	if(player.name === "Player 1"){
		currentPlayer = Player2;
		Player2.yourTurn = true;
		Player1.youtTurn = false; 
	}else{
		currentPlayer = Player1;
		Player1.yourTurn = true;
		Player2.yourTurn = false; 
	}
}
//checking if there is a win
 function checkIfWin(){
 	if(a1.value + a2.value + a3.value === "XXX" || a1.value + a2.value + a3.value === "OOO"){
 		return true;
 	}else if(b1.value + b2.value + b3.value === "XXX" || b1.value + b2.value + b3.value === "OOO"){
 		return true;
 	}else if(c1.value + c2.value + c3.value === "XXX" || c1.value + c2.value + c3.value === "OOO"){
 		return true;
 	}else if(a1.value + b1.value + c1.value === "XXX" || a1.value + b1.value + c1.value === "OOO"){
 		return true;
 	}else if(a2.value + b2.value + c2.value === "XXX" || a2.value + b2.value + c2.value === "OOO"){
 		return true;
 	}else if(a3.value + b3.value + c3.value === "XXX" || a3.value + b3.value + c3.value === "OOO"){
 		return true;
 	}else if(b1.value + b2.value + b3.value === "XXX" || b1.value + b2.value + b3.value === "OOO"){
 		return true;
 	}else if(a1.value + b2.value + c3.value === "XXX" || a1.value + b2.value + c3.value === "OOO"){
 		return true;
 	}else if(a3.value + b2.value + c1.value === "XXX" || a3.value + b2.value + c1.value === "OOO"){
 		return true;
 	}else{
 		return false;
 	}
 }

//adding points
 function addPoints(player, currentPoint){
 	console.log(player);
 	console.log(currentPoint);
 	currentPoint = currentPoint +1;
 	console.log(currentPoint);
 	return currentPoint;
 }
 //checking if there is a draw					
 function checkIfDraw(){
 	let allCells;
 	allCells = a1.value + a2.value + a3.value + b1.value + b2.value + b3.value + c1.value + c2.value + c3.value;
 	return allCells.includes(" ");
 }
//another round played after a draw with clearing the board and chengning round
 function playAgainDraw(){
 	round++;
	changeOnScreen(round ,"roundId");
	clearTheBoard();
 }
//clearing the board
 function clearTheBoard() {
 	a1.value = " ";
 	a1.empty = true;
 	changeOnScreen(" ", "a1");
 	a2.value = " ";
 	a2.empty = true;
 	changeOnScreen(" ", "a2");
 	a3.value = " ";
 	a3.empty = true;
 	changeOnScreen(" ", "a3");
 	b1.value = " ";
 	b1.empty = true;
 	changeOnScreen(" ", "b1");
 	b2.value = " ";
 	b2.empty = true;
 	changeOnScreen(" ", "b2");
 	b3.value = " ";
 	b3.empty = true;
 	changeOnScreen(" ", "b3");
 	c1.value = " ";
 	c1.empty = true;
 	changeOnScreen(" ", "c1");
 	c2.value = " ";
 	c2.empty = true;
 	changeOnScreen(" ", "c2");
 	c3.value = " ";
 	c3.empty = true;
 	changeOnScreen(" ", "c3");
 }
//reseting the game
 function resetGame(){
 	clearTheBoard();
 	//clear rounds
 	changeOnScreen(1, "roundId");
 	round = 1;
 	//clear score
 	Player1.score = 0;
 	Player2.score = 0;
 	changeOnScreen(0, "player1score");
 	changeOnScreen(0, "player2score");

 }





