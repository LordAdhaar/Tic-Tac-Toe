console.log("she a model girl");

//modular fnxn to create board object 
const GameBoard = (() => {
    return { board : [["","",""],["","",""],["","",""]] };
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
const reset = document.querySelector(".reset button");
let count = 0;
let winnerX = false;
let winnerO = false;

reset.addEventListener("click",resetBoard);


//when box div is clicked changes content to playerchoice
function playerTurn(event){

    let choice = document.querySelector(".choice");
    let announcement = document.querySelector(".announcement h3");

    if(event.path[0].innerHTML != "" || winnerO === true || winnerX === true){
        return;
    }

    event.path[0].innerHTML = player.choice;
    updateBoard(event);  
    
    console.log(GameBoard.board);

    count+=1;

    //if count ===5
    if(count>=5){
        if(count%2!=0){
            winnerX = WinnerX();
        }
        else{
            winnerO = WinnerO();
        }
    }
    
    if(winnerX===true){
        announcement.innerHTML = "PLAYER 1 HAS WON";
        choice.innerHTML="";
        return;
    }
    else if (winnerO===true){
        announcement.innerHTML = "PLAYER 2 HAS WON";
        choice.innerHTML = "";
        return;
    }
    
    if (count === 9 && winnerO==false && winnerX==false){
        console.log(count)
        announcement.innerHTML = "IT'S A DRAW";
        choice.innerHTML="";
        return;
    }


    console.log(winnerX,winnerO);

    if (count%2==0){
        player.choice = "X";
        announcement.innerHTML = "PLAYER 1 TURN -"
        choice.innerHTML = player.choice;
    }
    else{
        player.choice = "O";
        announcement.innerHTML = "PLAYER 2 TURN -"
        choice.innerHTML = player.choice;
    }
};

function updateBoard(event){

    let boxToBeUpdateNo = +event.path[0].id;    
    let boxNumber = 0;

    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(boxNumber===boxToBeUpdateNo){
                GameBoard.board[i][j]=event.path[0].innerHTML;
            }
            boxNumber+=1;
        }
    }
}

function WinnerX(){
    
    if (GameBoard.board[1][1]==="X"){
        if(GameBoard.board[1][0]==="X" && GameBoard.board[1][2]==="X"){
            return true;
        }
        else if(GameBoard.board[0][1]==="X" && GameBoard.board[2][1]==="X"){
            return true;
        }
        else if (GameBoard.board[0][0]==="X" && GameBoard.board[2][2]==="X"){
            return true;
        }
        else if (GameBoard.board[2][0]==="X" && GameBoard.board[0][2]==="X"){
            return true;
        }
    }
    else if(GameBoard.board[0][0]==="X"){
        if(GameBoard.board[1][0]==="X" && GameBoard.board[2][0]==="X"){
            return true;
        }
        else if(GameBoard.board[0][1]==="X" && GameBoard.board[0][2]==="X"){
            return true;
        }
    }
    else if (GameBoard.board[2][2]==="X"){
        if (GameBoard.board[2][1]==="X" && GameBoard.board[2][0]==="X"){
            return true;
        }
        else if (GameBoard.board[1][2]==="X" && GameBoard.board[0][2]==="X"){
            return true;
        }
    }

    return false;
}

function WinnerO(){
    
    if (GameBoard.board[1][1]==="O"){
        if(GameBoard.board[1][0]==="O" && GameBoard.board[1][2]==="O"){
            return true;
        }
        else if(GameBoard.board[0][1]==="O" && GameBoard.board[2][1]==="O"){
            return true;
        }
        else if (GameBoard.board[0][0]==="O" && GameBoard.board[2][2]==="O"){
            return true;
        }
        else if (GameBoard.board[2][0]==="O" && GameBoard.board[0][2]==="O"){
            return true;
        }
    }
    else if(GameBoard.board[0][0]==="O"){
        if(GameBoard.board[1][0]==="O" && GameBoard.board[2][0]==="O"){
            return true;
        }
        else if(GameBoard.board[0][1]==="O" && GameBoard.board[0][2]==="O"){
            return true;
        }
    }
    else if (GameBoard.board[2][2]==="O"){
        if (GameBoard.board[2][1]==="O" && GameBoard.board[2][0]==="O"){
            return true;
        }
        else if (GameBoard.board[1][2]==="O" && GameBoard.board[0][2]==="O"){
            return true;
        }
    }

    return false;
}

function resetBoard(){

    //RESET VARIABLES
    count=0;
    winnerO=false;
    winnerX=false;

    //RESET GAMEBOARD
    GameBoard.board = [["","",""],["","",""],["","",""]] ;
    constructGameBoard();

    //RESET ANNOUNCEMENT
    let announcement = document.querySelector(".announcement h3");
    let choice = document.querySelector(".choice");

    player.choice = "X";
    announcement.innerHTML = "PLAYER 1 TURN -"
    choice.innerHTML = player.choice



}