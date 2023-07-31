let array = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return array[Math.floor(Math.random() * array.length)];

}
let playerSelection;
let compSelection;

function playRound() {  //this is one round of Rock Paper Scissors
    let compSelection = getComputerChoice();
    //let playerInput= prompt("Rock, Paper, or Scissors?");
    let playerSelection = playerInput.toLowerCase();
    console.log("You chose " + playerSelection);
    console.log("Computer chose " + compSelection);

    if (playerSelection === "rock" && compSelection === "paper") {

        thisRound.textContent = "You lose! Paper beats Rock!";
        compTally++;
        currentTally.textContent = ("Current score: " + compTally + ","
            + playerTally);
        checkScore();
        return 'loss';
    }
    else if (playerSelection === "paper" && compSelection === "scissors") {

        thisRound.textContent = "You lose! Scissors beats Paper!"
        compTally++;
        currentTally.textContent = ("Current score: " + compTally + ","
            + playerTally);
        checkScore();
        return "loss";
    }
    else if (playerSelection === "scissors" && compSelection === "rock") {

        thisRound.textContent = "You lose! Rock beats Scissors!";
        compTally++;
        currentTally.textContent = ("Current score: " + compTally + ","
            + playerTally);
        checkScore();
        return "loss";
    }
    else if (playerSelection === "rock" && compSelection === "scissors") {

        thisRound.textContent = "You win! Rock beats Scissors!";
        playerTally++;
        currentTally.textContent = ("Current score: " + compTally + ","
            + playerTally);
        checkScore();
        return "win";
    }
    else if (playerSelection === "paper" && compSelection === "rock") {

        thisRound.textContent = "You win! Paper beats Rock!";
        playerTally++;
        currentTally.textContent = ("Current score: " + compTally + ","
            + playerTally);
        checkScore();
        return "win";
    }
    else if (playerSelection === "scissors" && compSelection === "paper") {

        thisRound.textContent = "You win! Scissors beats Paper!";
        playerTally++;
        currentTally.textContent = ("Current score: " + compTally + ","
            + playerTally);
        checkScore();
        return "win";
    }
    else {

        thisRound.textContent = "It's a tie!";
        currentTally.textContent = ("Current score: " + compTally + ","
            + playerTally);
        checkScore();
        return "tie";
    }

}

let playerTally = 0;
let compTally = 0;


const button = document.querySelector('#rock');
button.addEventListener('click', () => {
    playerInput = "rock";
    console.log('Rock');
    playRound();
})

const button2 = document.querySelector('#paper');
button2.addEventListener('click', () => {
    playerInput = "paper";
    console.log('Paper');
    playRound();
})

const button3 = document.querySelector('#scissors');
button3.addEventListener('click', () => {
    playerInput = "scissors";
    console.log('Scissors');
    playRound();
})

const divForResults = document.createElement('div');
divForResults.classList.add("results");
document.body.appendChild(divForResults);

const results = document.createElement('h2');
results.textContent = "Results: ";
divForResults.appendChild(results);

const thisRound = document.createElement('p');
divForResults.appendChild(thisRound);
//thisRound.textContent = "Winner this round: "

const currentTally = document.createElement('p');
divForResults.appendChild(currentTally);
currentTally.textContent = "Current Score: ";

const winner = document.createElement('h1');
divForResults.appendChild(winner);

function checkScore() {
    if (playerTally == 5) {
        alert("Player Wins!");
        playerTally = 0;
        compTally = 0;
        results.textContent = "Results: ";
    }
    else if (compTally == 5) {
        alert("Computer Wins!");
        playerTally = 0;
        compTally = 0;
        results.textContent = "Results: ";
    }
}



/*
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
    else if (compTally < playerTally){
        console.log("Player beat computer");
    }
    else {
        console.log("It's a tie!")
    }
}


game();

*/