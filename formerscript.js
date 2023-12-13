#!/usr/bin/node
/**
 * getComputerChoice: a function called getComputerChoice that will
 * randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.I will
 * use this function in the game to make the computer’s play.
 * @returns: one of the three choices that will return computer choice
 */
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    /* this brings random choice within rock, scissors and paper */
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
/**
 * testing the computer choice function
 * onst computerChoice = getComputerChoice().toLowerCase();
 * console.log("Comuter's choice: " + computerChoice);


/**
 * getUserChoice: a function that prompt the user to enter either
 * rock, scissors or paper. if the input is different it will show invalid
 * message.
 * returns: the player selection
 
function getUserChoice() {
    let playerSelection; = prompt("Enter Rock, Paper, or Scissors: ");
    if (playerSelection){
         this allow the input to be automatically be lowercase to give
        room for different letter case, either Rock or ROCk, it will work
        playerSelection = playerSelection.toLowerCase();
    }
    while (!["Rock", "Paper", "Scissors"].includes(playerSelection)) {
        playerSelection = prompt("Invalid Choice. Enter Rock, Paper, or Scissors to play: ");
        if (playerSelection) {
            playerSelection = playerSelection.toLowerCase();
        }
    }
    return playerSelection;
}
/* testing the getUserFunction */
/**
 * const playerSelection = getUserChoice();
 * console.log("User's choice: " + playerSelection);
 * /

/**
 * playRound - a function that plays a single round of rock scissors
 * @playerSelection: parameter that rep the player
 * @computerSelection: parameter that represent player selection
 * @returns: returns the winner either the player or the computer
 */
function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();

    if (player === computerSelection) {
        return "It's a tie, you guys choose same";
    } else if (player === 'rock' && computerSelection === 'scissors') {
        return "You Win! Rock beats Scissors";
    } else if (player === 'scissors' && computerSelection === 'paper') {
        return "You Win! Scissors beat Paper";
    } else if (player === 'paper' && computerSelection === 'rock') {
        return "You Win! Paper beat Rock";
    } else {
        return "You lost to computer!"
    }
}
function game() {
    prompt("it's time for for rock, paper, scissor game!")
    playerSelection = getUserChoice()
    computerSelection = getComputerChoice()
    console.log(`You choose: ${playerSelection}`)
    console.log(`Computer choose: ${computerSelection}`)
    console.log(playRound)

}