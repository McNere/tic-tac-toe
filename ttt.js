const squares = document.querySelectorAll(".item");
const display = document.querySelector("#display");
const resetBtn = document.querySelector("#reset");
let turn = "X";
let round = 1;

resetBtn.addEventListener("click", reset);

init();

const checkWin = (player) => {
	if ((squares[0].textContent === player&&squares[1].textContent === player&&squares[2].textContent === player) ||
		(squares[3].textContent === player&&squares[4].textContent === player&&squares[5].textContent === player) ||
		(squares[6].textContent === player&&squares[7].textContent === player&&squares[8].textContent === player) ||
		(squares[0].textContent === player&&squares[3].textContent === player&&squares[6].textContent === player) ||
		(squares[1].textContent === player&&squares[4].textContent === player&&squares[7].textContent === player) ||
		(squares[2].textContent === player&&squares[5].textContent === player&&squares[8].textContent === player) ||
		(squares[0].textContent === player&&squares[4].textContent === player&&squares[8].textContent === player) ||
		(squares[2].textContent === player&&squares[4].textContent === player&&squares[6].textContent === player)) {
		return player;
	} else {
		return null;
	}
}

const play = (player, num) => {
	squares[num].textContent = player;
	turn === "X" ? squares[num].style.color = "red" : squares[num].style.color = "blue";
}

function setupSquares() {
	squares.forEach((square, i) => {
		square.addEventListener("click", () => {
			console.log(round);
			if (!square.textContent && round) {
				play(turn, i);
				const winner = checkWin(turn);
				if (winner === "X") {
					round = null;
					display.textContent = "The winner is Player 1!";
				}
				else if (winner === "O") {
					round = null;
					display.textContent = "The winner is Player 2!";
				} else {
					/1/g.test(display.textContent) ? 
					display.textContent = "Player 2's turn" : 
					display.textContent = "Player 1's turn";
					turn === "X" ? turn = "O" : turn = "X";
					round++;
				}
			}
			if (round === 10) {
				round = null;
				display.textContent = "It's a draw!";
			}
		});
	});
}

function reset() {
	turn = "X";
	round = 1;
	display.textContent = "Player 1's turn";
	squares.forEach(square => square.textContent = "");
}

function init() {
	reset();
	setupSquares();
}