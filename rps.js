let array = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return array[Math.floor(Math.random() * array.length)];
 
}
function playRound(){
let compSelection = getComputerChoice();
let playerSelection = prompt("Rock, Paper, or Scissors?")
console.log("You chose " + playerSelection);
    console.log("Computer chose " + compSelection);
}
playRound();
playRound();
playRound();