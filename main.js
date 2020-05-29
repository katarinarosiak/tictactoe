

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
function checkIfEmpty(object){
	if(object.value === " "){
		return true
	}else{
		return false
		}
	};

//--//--//--//--//--//--//--//--//--//--//--//--///--//--//--//--//--//--//--//--//--//--//--//--/
//create User objects
class User {
	constructor(name, sign, score, yourTurn) {
		this.name = name;
		this.sign = sign;
		this.score = score;
		this.yourTurn = yourTurn;
	}
}
	let Player1 = new User("Player 1", " ", 0, false);
	let Player2 = new User("Player 2", " ", 0, false);



let gameSigns = ["X", "O"];
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
	Player1.yourTurn = true;
console.log(Player1.yourTurn);
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
function buttonClicked(what, where){
	if(checkIfEmpty(object) === true){
		changeOnScreen(what, where);

}
//working on printing sign of a player 1 on a chosen button. button clicked should 
//go as a onclick on every button. Unless there is a way we can have it in object
//after the click buttonClicked starts and check if a value of object is empty
//but how to connect cell Id with this object? 


	




