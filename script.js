console.log("she a model girl");

//modular fnxn to create board object 
const GameBoard = (() => {
    return { board : [["O","O","X"],["X","O","O"],["X","O","X"]] };
})();

// factort function to create player
let player = ((choice) => {
    return {choice : "X"};
})();

//construct the board
const constructGameBoard = () => {

    const allBoxes = document.querySelectorAll(".box");
    let boxNo = 0;

    for(let i=0; i<3 ; i++){
        for(let j=0; j<3 ; j++){
            console.log(allBoxes[boxNo].innerHTML,GameBoard.board[i][j]); 
            allBoxes[boxNo].innerHTML = GameBoard.board[i][j]; 
            console.log(allBoxes[boxNo].innerHTML===GameBoard.board[i][j]); 
            boxNo+=1;
        }
    }
};

//fnxn called
constructGameBoard();

//choice buttons
const X = document.querySelector(".X");
const O = document.querySelector(".O");
const allBoxes = document.querySelectorAll(".box");

//when clicked change the playerchoice
X.addEventListener("click", ()=>{
    player.choice = X.innerHTML;
    console.log(player.choice)
});

O.addEventListener("click",()=>{
    player.choice = O.innerHTML;
    console.log(player.choice);
});

//when box div is clicked changes content to playerchoice
function playerTurn(event){
    console.log("hello world");
    event.path[0].innerHTML = player.choice;
    console.log(event.path[0].innerHTML);
};

