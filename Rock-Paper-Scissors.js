//Global Scope
const possOutcomes = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

game() // Play the game

//playerSelection - User will input their move here
function playerSelection() {
    let selection = prompt("Rock, Paper or Scissors?");
    let capFirstLetter = selection[0].toUpperCase();
    let restOfString = selection.slice(1).toLowerCase();
    let capSelection = (capFirstLetter + restOfString);
    return capSelection; 
}

//computerPlay - Computer's random moves
function computerPlay() { //removing parameter. not needed.
    let outcome = possOutcomes[Math.floor(Math.random() * possOutcomes.length)];
    return outcome;
}

//Captured player variables
// let playerMove = playerSelection();
// let computerMove = computerPlay();

//Single Round Game
function oneRound(playerMove,computerMove) {

    playerMove = playerSelection();
    computerMove = computerPlay();
    
    //Choose 'Rock'
    if (playerMove === 'Rock' && computerMove === 'rock') {
        return "Tie";
    } 
        else if (playerMove === 'Rock' && computerMove === 'scissors') {
            return "You win!";
        }
        else if (playerMove === 'Rock' && computerMove === 'paper') {
            return "You lost...";
        }
    //Choose 'Paper'
    if (playerMove === 'Paper' && computerMove === 'rock') {
        return "You win!";
    }
        else if (playerMove === 'Paper' && computerMove === 'paper') {
            return "Tie";
        }
        else if (playerMove === 'Paper' && computerMove === 'scissors') {
            return "You lost...";
        }
    //Choose 'Scissors'
    if (playerMove === 'Scissors' && computerMove === 'rock') {
        return "You lost...";
    }
        else if (playerMove === 'Scissors' && computerMove === 'paper') {
            return "You win!";
        }
        else if (playerMove === 'Scissors' && computerMove === 'scissors') {
            return "Tie";
        }
}

//oneRound in variable
// let gameOutcome = oneRound();
// console.log(gameOutcome);

function checkWinner() {
    if (playerScore === 5) {
        console.log('You won the game!');
        return true; // return true since a winner has been decided
    }else if(computerScore === 5) {
        console.log('Computer won the game!');
        return true; // return true since a winner has been decided
    }
    return false; // no winner yet so return false
}

//Game function - Play to best of 5
function game() {
    while (checkWinner() == false) { // play until we have a winner
        gameOutcome = oneRound();
        if (gameOutcome === 'You win!') {
            playerScore++;
            console.log(playerScore, computerScore);
            console.log('You win!');
        }else if (gameOutcome === 'You lost...') {
                computerScore++;
                console.log(playerScore, computerScore);
                console.log('You lost...');
        }else if (gameOutcome === 'Tie') {
                console.log(playerScore, computerScore);
                console.log('Tie');
        }
    }
}