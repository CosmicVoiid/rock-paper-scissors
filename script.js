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
    let prompt;

    switch (playerSelection.toLowerCase()){
        case "rock":

            if (computerSelection === "rock"){
                prompt = "It's a draw! You both chose Rock";
            }

            else if (computerSelection === "paper"){
                prompt = "You lose! Paper beats Rock";
            }

            else {
                prompt = "You win! Rock beats Scissors";
            }
            break;
        
        case "paper":

            if (computerSelection === "rock"){
                prompt = "You win! Paper beats Rock";
            }
    
            else if (computerSelection === "paper"){
                prompt = "It's a draw! You both chose paper";
            }
    
            else {
                prompt = "You lose! Scissors beats Paper";
            }
            break;

        case "scissors":

            if (computerSelection === "rock"){
                prompt = "You lose! Rock beats Scissors";
            }

            else if (computerSelection === "paper"){
                prompt = "You win! Scissors beats Paper";
            }

            else {
                prompt = "It's a draw! You both chose Scissors";
            }
            break;
    }
    return prompt;
}

const playerSelection = "ROCK";
const computerSelection = computerPlay();

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection)); //This line reports undefined