//1) Define the required variables used to track the state of the game.

let board;
let turn;
let winner;
let tie;

//2) Store cached element references.

const squareEls = document.querySelectorAll(".sqr");
// console.dir(squareEls);
const messageEl = document.querySelector("#message");
// console.dir(messageEl);
const boardEl = document.querySelector(".board");
// console.dir(boardEl);

//4) The state of the game should be rendered to the user.

const updateBoard = () => {
    board.forEach((square, i) => {
        squareEls[i].textContent = board[i];
    });
};

const updateMessage = () => {
    if (winner === false && tie === false) {
        messageEl.textContent = `It is ${turn}'s turn.`;
    } else if (winner === false && tie === true) {
        messageEl.textContent = "It's a tie!";
    } else {
        messageEl.textContent = `${turn} wins!`;
    };
};

const render = () => {
    updateBoard();
    updateMessage();
};

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

const init = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    turn = "X";
    winner = false;
    tie = false;
    render();
};

init();

//5) Define the required constants.

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
];

//6) Handle a player clicking a square with a `handleClick` function.

const placePiece = (i) => {
    board[i] = turn;
    // console.log(board);
};

const checkForWinner = () => {
    winningCombos.forEach((combo) => {
        if (board[combo[0]] !== "" && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
            winner = true;
            console.log(winner);
        };
    });
};

const handleClick = (event) => {
    console.log(event.target.id);
    if (winner === true) { return };
    if (event.target.id === "") { return };
    const squareIndex = event.target.id;
    if (squareEls[squareIndex].textContent !== "") { return };
    placePiece(squareIndex);
    checkForWinner();

};
boardEl.addEventListener("click", handleClick);

//7) Create Reset functionality.
