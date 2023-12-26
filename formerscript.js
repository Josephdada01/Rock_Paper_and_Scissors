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


/* Determine who win the game after round 5*/
    //const winnerDisplay = document.getElementById('winnerDisplay');
    //if (playerscore === 5) {
        //winnerDisplay.textContent = "congratulations, you win the game";
    //} else if (computerscore === 5) {
        //winnerDisplay.textContent = "Sorry, computer wins!";
    //} else {
        //if (playerscore === computerscore && playerscore >= 1 && playerscore <= 4) {
           // winnerDisplay.textContent = `it's a tie ${playerscore}-${computerscore}`;
        //} else {
            //if (playerscore > computerscore) {
                //winnerDisplay.textContent = `You are leading ${playerscore}-${computerscore}`;
            //} else {
                //winnerDisplay.textContent = `Computer is leading ${playerscore}-${computerscore}`;
            //}
        //}
    //}
//}


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
    
    if (playerSelection === computerSelection) {
        return `It's a tie, you choose ${playerSelection} and computer choose ${computerSelection}`
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You Win! you choose ${playerSelection} and computer choose ${computerSelection}`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You Win! you choose ${playerSelection} and computer choose ${computerSelection}`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You Win! you choose ${playerSelection} and computer choose ${computerSelection}`
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You lost! computer choose ${computerSelection} and you choose ${playerSelection}`
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return `You lost! computer choose ${computerSelection} and you choose ${playerSelection}`
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You lost! computer choose ${computerSelection} and you choose ${playerSelection}`
    }
}
//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));


/**
 * game: function called game().I Use the previous function inside
 * of this one to play a best-of-five game
 * that keeps score and reports a winner or loser at the end.
 */
function game(playerSelection) {
    let playerscore = 0;
    let computerscore = 0;
    
    while (playerscore < 5 && computerscore < 5) {
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        /* updates the result based on the winner */
        if (result.includes('Win')) {
            playerscore++;
        } else if (result.includes('lost')) {
            computerscore++;
        }
        // updating the dom to display the result and running score
        const resultDisplay = document.getElementById('resultDisplay');
        const scoreDisplay = document.getElementById('scoreDisplay');
        const winnerDisplay = document.getElementById('winnerDisplay');

        resultDisplay.textContent = result;
        scoreDisplay.textContent = `Player: ${playerscore} || Computer: ${computerscore}`;
        
        if (playerscore === 5 || computerscore === 5) {
            if (playerscore === 5) {
                winnerDisplay.textContent = "Congratulations, you win the game!";
            } else {
                winnerDisplay.textContent = "Sorry, computer wins!";
            }
            break;
            // Reset scores
            playerscore = 0;
            computerscore = 0;
            // Update DOM to display reset scores
            const scoreDisplay = document.getElementById('scoreDisplay');
            scoreDisplay.textContent = `Player: ${playerscore} || Computer: ${computerscore}`;
        }
    }
}

document.getElementById('rockButton').addEventListener('click', function() {
    game('rock');
});

document.getElementById('paperButton').addEventListener('click', function() {
    game('paper');
});

document.getElementById('scissorsButtton').addEventListener('click', function() {
    game('scissors');
});

game();
