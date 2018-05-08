const squares = document.querySelectorAll(".item");
let turn = "X";

squares.forEach((square, i) => square.addEventListener("click", () => {
	if (!square.textContent) {
		play(turn, i);
		const winner = checkWin(turn);
		if (winner) {
			console.log(`Winner is ${turn}`);
		} else {
			turn === "X" ? turn = "O" : turn = "X";
		}
	}
}));

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