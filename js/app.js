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

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
