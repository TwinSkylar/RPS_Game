/**
 * Name:  getComputerChoice
 * Purpose:  Randomly selects rock, paper or scissors 
 * Return:  ROCK, PAPER or SCISSORS
 */

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);
    if (choice === 1) {
        return "ROCK";
    }
    else if (choice === 2) {
        return "PAPER";
    }
    else {
        return "SCISSOR";
    }
}

/**
 * Name:  game
 * Purpose:  Plays a single round of rock paper scissors
 * Parameters:  playerSelection - A players choice of the three
 */

function game(playerSelection) {
    let winner;
    computerChoice = getComputerChoice();
    if ((computerChoice === "SCISSOR" && playerSelection === "PAPER") || (computerChoice === "PAPER" && playerSelection == "ROCK") || (computerChoice === "ROCK" && playerSelection === "SCISSOR")) {
        winner = "Computer " + computerChoice + " beats " + playerSelection + "!";
        computerScore++;
    }
    else if (computerChoice === playerSelection) {
        winner = "Tie, computer chose " + computerChoice + " against your " + playerSelection;
    }
    else {
        winner = "Player " + playerSelection + " beats " + computerChoice + "!";
        playerScore++;
    }
    printResult (winner,"gameRound");
}

/**
 * Name:  printResult
 * Purpose:  Updates the website with the result of the game
 */

function printResult(result, contentType){        
    const bod = document.querySelector('.content');
    const div = document.createElement('div');
    div.classList.add (contentType);
    div.textContent = result;
    bod.appendChild (div);
}

/**
 * Name:  playerSelection
 * Purpose:  Plays a single round of rock paper scissors once a button is clicked
 * Parameters:  e - The event from clicking a button 
 */

function playerSelection(e) {
    let winner;
    if (playerScore < 5 && computerScore < 5){
        console.log ("GAME START");
        game (e.target.id);
    }
    else{
        console.log ("GAME END");
        if (playerScore === 5){
            winner = "Player"
        }
        else{
            winner = "Computer"
        }
        if (!document.querySelector('.gameResult')){
            printResult (`The game has ended, ${winner} has won!`,'gameResult');
        }
    }
}

/** defining event listeners */

/** Event listener for all the buttons on the webpage */
const buttons = document.querySelectorAll(".btn");
buttons.forEach(function(e){
    e.addEventListener('click',playerSelection);
});

let playerScore = 0; //Stores the player's score
let computerScore = 0; // Stores the computer's score

