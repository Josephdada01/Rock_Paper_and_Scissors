#!/usr/bin/node
/**
 * a function called getComputerChoice that will
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
const computerChoice = getComputerChoice().toLocaleLowerCase();