

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
 							//////////   CHeck if draw and reset game /////////
 function checkIfDraw(){
 	let allCells = [a1 + a2]
 }

 function resetGame(){
 	console.log("the game has been reset");
 }

//--//--//--//--//--//--//--//--//--//--//--//--///--//--//--//--//--//--//--//--//--//--//--//--/
//create User objects
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


let currentPlayer = Player1;
let gameSigns = ["X", "O"];
let round = 1; 
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
}

//make each cell to an object  
class Cell {
    constructor(value, empty, color, win) {
        this.value = value;
        this.empty = empty;
        this.color = color;
        this.win = win;
    }
    writeSign() {
        console.log("this method will change a sign to x or o whenever button clicked");
    }
    changeColor() {
    	console.log("this method will change the color of cell whenever win");
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

//Function that will take an elemenet and print it on the chosen element of a page if empty
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
  				let currentScore = player.score +1;
				changeOnScreen(currentScore, player.elementId);
				round++;
				changeOnScreen(round ,"roundId");
				} else {
  				resetGame();
				}

	//check if there is a draw
		//}else if(checkIfDraw() === true){

		}	

	}
}
//game works but needs to now make reset game work and shows and draws



