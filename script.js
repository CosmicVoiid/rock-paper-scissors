//randomly choose selection for computer
function computerPlay(){
    let randomSelection = Math.floor(Math.random() * 3)
    let computerSelection;

    switch (randomSelection){
        case 0:
            computerSelection = "rock";
            break;
        
        case 1:
            computerSelection = "paper";
            break;
        
        case 2:
            computerSelection = "scissors";
            break;
    }
    
    return computerSelection;
}

//plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection){    
    let message;

    switch (playerSelection.toLowerCase()){
        case "rock":

            if (computerSelection === "rock"){
                message = "You both chose Rock";
            }

            else if (computerSelection === "paper"){
                message = "Paper beats Rock";
                compWins++;
            }

            else {
                message = "Rock beats Scissors";
                playerWins++;
            }
            break;
        
        case "paper":

            if (computerSelection === "rock"){
                message = "Paper beats Rock";
                playerWins++;
            }
    
            else if (computerSelection === "paper"){
                message = "You both chose paper";
            }
    
            else {
                message = "Scissors beats Paper";
                compWins++;
            }
            break;

        case "scissors":

            if (computerSelection === "rock"){
                message = "Rock beats Scissors";
                compWins++;
            }

            else if (computerSelection === "paper"){
                message = "Scissors beats Paper";
                playerWins++;
            }

            else {
                message = "You both chose Scissors";
            }
            break;
    }
    return message;
}

function game(){
    let playerChoice;
    for (i = 0; i < 5; i++){
        playerChoice = prompt("Enter Rock, Paper, or Scissors:")
        console.log(playRound(playerChoice, computerPlay()));
        console.log(`Round ${i+1}\nPlayer: ${playerWins} Computer: ${compWins}`);
    }
    winDisplay();
}

function winDisplay(){
    if (playerWins === compWins){
        console.log("It's a draw!")
    }

    else {
        playerWins > compWins ? console.log("You win!") : console.log("You lose!");
    }
}


//Wins counter initilzation
let playerWins = 0;
let compWins = 0;

//Starts game
game();