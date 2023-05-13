

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*15);
    //console.log(randomNumber);

    if (randomNumber >= 0 && randomNumber <= 5){
        return "rock";
    }
    if (randomNumber > 5 && randomNumber <= 10) {
        return "paper";
    }
    if (randomNumber > 10) {
        return "scissor";
    }
}
//let choice = getComputerChoice();
//console.log(choice);
//playerselection
function playerSelection() {

    let Rock;
    let Paper;
    let Scissor;
    playerinput = prompt("Please Enter rock,paper or scissor");
    let ans = playerinput.toLowerCase();
    return ans;

}

//let playerSelect = playerSelection();
//console.log(playerselect);

//let  computerSelection = choice;

function playRound(playerSelection, computerSelection) {

    console.log("Computers choice: " + computerSelection);
    console.log("Player choice: " + playerSelection);

    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You lose ! Paper beats Rock";
        }else {
            return "You win ! Rock beats Scissor";
        }
    
    }else if (playerSelection == "paper") {
        if (computerSelection == "scissor") {
            return "You lose ! Scissors beats Paper";
        } else {
            return "You win ! Paper beats Rock";
        }
    } else if (playerSelection == "scissor") {
        if (computerSelection == "rock") {
            return "You lose ! Rock beats Scissor";
        } else {
            return "You win! Scissors beats paper";
        }
    }else {
        return "Select rock paper or scissor";
    }
}

//playerSelection();
console.log(playRound(playerSelection(),getComputerChoice()));
