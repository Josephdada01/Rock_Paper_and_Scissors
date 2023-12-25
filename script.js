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
 * playRound - a function that plays a single round of rock scissors
 * @playerSelection: parameter that rep the player
 * @computerSelection: parameter that represent player selection
 * @returns: returns the winner either the player or the computer
 */
function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();

    if (player === computerSelection.toLowerCase()) {
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
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


/**
 * game: function called game().I Use the previous function inside
 * of this one to play a best-of-five game
 * that keeps score and reports a winner or loser at the end.
 */
function game() {
    let playerscore = 0;
    let computerscore = 0;
    
    while (playerscore < 5 && computerscore < 5) {
        
        const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);
        console.log(result)

        /* updates the result based on the winner */
        if (result.includes('Win')) {
            playerscore++;
        } else if (result.includes('Lose')) {
            computerscore++;
        }
        // updating the dom to display the result and running score
        const resultDisplay = document.getElementById('resultDisplay');
        const scoreDisplay = document.getElementById('scoreDisplay');

        resultDisplay.textContent = result;
        scoreDisplay.textContent = `Player: ${playerscore} || Computer: ${computerscore}`;
    }
    /* Determine who win the game after round 5*/
    if (playerscore > computerscore) {
        console.log("congratulations, you win the game");
    } else if (computerscore > playerscore) {
        console.log("Sorry, computer win");
    } else {
        console.log("It is a tie, no winner");
    }
}

game();