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

function playRound(playerSelection, computerChoice) {
    let winner;
    computerChoice = getComputerChoice();
    if ((computerChoice === "SCISSOR" && playerSelection === "PAPER") || (computerChoice === "PAPER" && playerSelection == "ROCK")) {
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
    console.log(winner);
    return result;
}

function playerSelection() {
    let selection = prompt("What do you choose").toLowerCase();
    if (selection === "rock" || selection === "paper" || selection === "scissors") {
        return selection.toUpperCase();
    }
    else {
        console.log("Sorry, please try again with rock, paper or scissors");
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    let gameNumber = 0;
    for (let i = 0; i < 5; i++) {
        result = playRound(playerSelection(), getComputerChoice());
        gameNumber++;
        if (result === 2) {
            playerScore++;
        }
        else if (result === 1) {
            computerScore++;
        }
        console.log("Round " + gameNumber + ": Player: " + playerScore + "  Computer: " + computerScore);
    }
    if (computerScore === playerScore) {
        console.log("The game has tied!");
    }
    else if (computerScore > playerScore) {
        console.log("The computer has won!");
    }
    else {
        console.log("The player has won!");
    }

}

game();

