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
 * Return:  A numerical result of the game.  
 */

function game(playerSelection) {
    let winner;
    computerChoice = getComputerChoice();
    if ((computerChoice === "SCISSOR" && playerSelection === "PAPER") || (computerChoice === "PAPER" && playerSelection == "ROCK") || (computerChoice === "ROCK" && playerSelection === "SCISSOR")) {
        winner = "Computer " + computerChoice + " beats " + playerSelection + "!";
        result = 1;
    }
    else if (computerChoice === playerSelection) {
        winner = "Tie, computer chose " + computerChoice + " against your " + playerSelection;
        result = 0;
    }
    else {
        winner = "Player " + playerSelection + " beats " + computerChoice + "!";
        result = 2;
    }
    printResult (winner);
    return result;
}

/**
 * Name:  printResult
 * Purpose:  Updates the website with the result of the game
 * Parameters:  result - The result of the game 
 */

function printResult(result){        
    console.log(result);
}

/**
 * Name:  playerSelection
 * Purpose:  Plays a single round of rock paper scissors once a button is clicked
 * Parameters:  e - The event from clicking a button 
 */

function playerSelection(e) {
        game (e.target.id);
}

/** defining event listeners */

/** Event listener for all the buttons on the webpage */
const buttons = document.querySelectorAll(".btn");
buttons.forEach(function(e){
    e.addEventListener('click',playerSelection);
});


