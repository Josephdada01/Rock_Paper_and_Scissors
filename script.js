function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function updateScoreDisplay(playerscore, computerscore) {
    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.textContent = `Player: ${playerscore} || Computer: ${computerscore}`;
}

function updateResultDisplay(result, playerSelection, computerSelection) {
    const resultDisplay = document.getElementById('resultDisplay');
    if (result === 'tie') {
        resultDisplay.textContent = `It's a tie, you choose ${playerSelection} and computer choose ${computerSelection}`;
    } else if (result === 'player') {
        resultDisplay.textContent = `You Win! you choose ${playerSelection} and computer choose ${computerSelection}`;
    } else {
        resultDisplay.textContent = `You lost! computer choose ${computerSelection} and you choose ${playerSelection}`;
    }
}

let playerscore = 0;
let computerscore = 0;
let gameFinished = false;

function game(playerSelection) {
    if (gameFinished) return;

    const winnerDisplay = document.getElementById('winnerDisplay');

    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result === 'player') {
        playerscore++;
    } else if (result === 'computer') {
        computerscore++;
    }

    updateResultDisplay(result, playerSelection, computerSelection);
    updateScoreDisplay(playerscore, computerscore);

    if (playerscore === 5 || computerscore === 5) {
        gameFinished = true;
        if (playerscore === 5) {
            winnerDisplay.textContent = "Congratulations, you win the game!";
        } else {
            winnerDisplay.textContent = "Sorry, computer wins!";
        }
    }
}

function resetGame() {
    playerscore = 0;
    computerscore = 0;
    gameFinished = false;

    const winnerDisplay = document.getElementById('winnerDisplay');
    winnerDisplay.textContent = '';

    updateScoreDisplay (playerscore, computerscore);
    const resultDisplay = document.getElementById('resultDisplay');
    resultDisplay.textContent = '';
}
// when you click the restart button it will triger the reset game function
document.getElementById('restartButton').addEventListener('click', function() {
    resetGame();
});

// when you click the rock paper or scissors, it will trigger the game function
document.getElementById('rockButton').addEventListener('click', function() {
    game('rock');
});

document.getElementById('paperButton').addEventListener('click', function() {
    game('paper');
});

document.getElementById('scissorsButton').addEventListener('click', function() {
    game('scissors');
});
