let array = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return array[Math.floor(Math.random() * array.length)];

}
let playerSelection;
let compSelection;

function playRound() {  //this is one round of Rock Paper Scissors
    let compSelection = getComputerChoice();
    let playerInput= prompt("Rock, Paper, or Scissors?");
    let playerSelection = playerInput.toLowerCase();
    console.log("You chose " + playerSelection);
    console.log("Computer chose " + compSelection);

    if (playerSelection === "rock" && compSelection === "paper") {
        alert("You lose! Paper beats Rock!");
        return 'loss';       
    }
    else if (playerSelection === "paper" && compSelection === "scissors") {
        alert("You lose! Scissors beats Paper!");
        return "loss";        
    }
    else if (playerSelection === "scissors" && compSelection === "rock") {
        alert("You lose! Rock beats Scissors!");
        return "loss";        
    }
    else if (playerSelection === "rock" && compSelection === "scissors") {
        alert("You win! Rock beats Scissors!");
        return "win";        
    }
    else if (playerSelection === "paper" && compSelection === "rock") {
        alert("You win! Paper beats Rock!");
        return "win";        
    }
    else if (playerSelection === "scissors" && compSelection === "paper") {
        alert("You win! Scissors beats Paper!");
        return "win";        
    }
    else {
        alert("It's a tie!");
        return "tie";
    }
    
}


let playerTally = 0;
let compTally = 0;


function game(){
   let result = playRound(playerSelection, compSelection);
    if (result=="win"){
        playerTally++;
    }
    else if (result == "loss"){
        compTally++;
    }
    console.log("Current player score is " + playerTally);
    console.log("Current computer score is " + compTally);
    
    result = playRound(playerSelection, compSelection);
    if (result=="win"){
        playerTally++;
    }
    else if (result == "loss"){
        compTally++;
    }
    console.log("Current player score is " + playerTally);
    console.log("Current computer score is " + compTally);

    result = playRound(playerSelection, compSelection);
    if (result=="win"){
        playerTally++;
    }
    else if (result == "loss"){
        compTally++;
    }
    console.log("Current player score is " + playerTally);
    console.log("Current computer score is " + compTally);

    result = playRound(playerSelection, compSelection);
    if (result=="win"){
        playerTally++;
    }
    else if (result == "loss"){
        compTally++;
    }
    console.log("Current player score is " + playerTally);
    console.log("Current computer score is " + compTally);

    result = playRound(playerSelection, compSelection);
    if (result=="win"){
        playerTally++;
    }
    else if (result == "loss"){
        compTally++;
    }
    console.log("Current player score is " + playerTally);
    console.log("Current computer score is " + compTally);
    

    if (compTally > playerTally){
        console.log("Player lost to computer");
    }
    else if (compTally< playerTally){
        console.log("Player beat computer");
    }
    else {
        console.log("It's a tie!")
    }
}

game();