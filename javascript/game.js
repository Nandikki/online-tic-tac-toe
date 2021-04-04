const statusDisplay = document.querySelector('.status');

let onGame = true; // is the game happening?
let currentPlayer = 1;
let gameGrid = ["", "", "", 
				"", "", "", 
				"", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentTurn = () => `It's Player ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentTurn();
function resultValidation() {
	///////////
	// Verifies if Player 1 Won 
	//////////
	// Horizontal
	if (gameGrid[0] == 1)
		if (gameGrid[1] == 1)
			if (gameGrid[2] == 1)
				setWinner(1);
	if (gameGrid[3] == 1)
		if (gameGrid[4] == 1)
			if (gameGrid[5] == 1)
				setWinner(1);
	if (gameGrid[6] == 1)
		if (gameGrid[7] == 1)
			if (gameGrid[8] == 1)
				setWinner(1);

	//Vertical
	if (gameGrid[0] == 1)
		if (gameGrid[3] == 1)
			if (gameGrid[6] == 1)
				setWinner(1);
	if (gameGrid[1] == 1)
		if (gameGrid[4] == 1)
			if (gameGrid[7] == 1)
				setWinner(1);
	if (gameGrid[2] == 1)
		if (gameGrid[5] == 1)
			if (gameGrid[8] == 1)
				setWinner(1);

	//Diagonal
	if (gameGrid[0] == 1)
		if (gameGrid[4] == 1)
			if (gameGrid[8] == 1)
				setWinner(1);
	if (gameGrid[2] == 1)
		if (gameGrid[4] == 1)
			if (gameGrid[6] == 1)
				setWinner(1);

	///////////
	// Verifies if Player 2 Won 
	//////////
	// Horizontal
	if (gameGrid[0] == 2)
		if (gameGrid[1] == 2)
			if (gameGrid[2] == 2)
				setWinner(2);
	if (gameGrid[3] == 2)
		if (gameGrid[4] == 2)
			if (gameGrid[5] == 2)
				setWinner(2);
	if (gameGrid[6] == 2)
		if (gameGrid[7] == 2)
			if (gameGrid[8] == 2)
				setWinner(2);

	//Vertical
	if (gameGrid[0] == 2)
		if (gameGrid[3] == 2)
			if (gameGrid[6] == 2)
				setWinner(2);
	if (gameGrid[1] == 2)
		if (gameGrid[4] == 2)
			if (gameGrid[7] == 2)
				setWinner(2);
	if (gameGrid[2] == 2)
		if (gameGrid[5] == 2)
			if (gameGrid[8] == 2)
				setWinner(2);

		//Diagonal
	if (gameGrid[0] == 2)
		if (gameGrid[4] == 2)
			if (gameGrid[8] == 2)
				setWinner(2);
	if (gameGrid[2] == 2)
		if (gameGrid[4] == 2)
			if (gameGrid[6] == 2)
				setWinner(2);

	///////////
	// Verifies Draw 
	//////////
	let ctrl = true;
	for (i = 0; i < 9; i++)
		if (gameGrid[i] == "")
			ctrl = false;
	if (ctrl)
		setWinner(3);
}

function setWinner(winner) {
	if(winner == 1  || winner == 2) {
		onGame = false;
		statusDisplay.innerHTML = winningMessage();
	}

	if(winner == 3 && onGame) {
		onGame = false;
		statusDisplay.innerHTML = drawMessage();
	}

}

//Verifies if the movement was valid.
function isValid(index) {
	return (gameGrid[index] == "");
}

function getColor() {
	return ((currentPlayer == 1) ? "p_one" : "p_two");
}

//When a slot is selected, this function is called.
function cellClick(e) {
	const cell = e.target; 
	const index = parseInt(cell.getAttribute('index'));

	if (isValid(index) && onGame) {
		gameGrid[index] = currentPlayer;
		e.srcElement.setAttribute("id", getColor());
		statusDisplay.innerHTML = currentTurn();
		resultValidation();
		currentPlayer = (currentPlayer == 1 ? 2 : 1);
	}

}
function restartGame() {
	gameGrid = ["", "", "", 
					"", "", "", 
					"", "", ""];
	document.querySelectorAll('.cell').forEach(cell => cell.setAttribute("id", ""));
	statusDisplay.innerHTML = currentTurn();
	onGame = true;
}
/*
And finally we add our event listeners to the actual game cells, as well as our 
restart button
*/
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelector('.restartBtn').addEventListener('click', restartGame);