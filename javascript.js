
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

function playerSelection() {

    let Rock;
    let Paper;
    let Scissor;

    playerinput = prompt("Please Enter rock,paper or scissor");
   
    let ans = playerinput.toLowerCase();

    return ans;

}

let playerScore=0;
let computerScore=0;

function playRound(playerSelection, computerSelection) {
    
    const cc = document.getElementById("cc");
    const pc = document.getElementById("pc");
    const resultDiv = document.getElementById("result");
   
    cc.textContent="COMPUTER CHOICE:   " + computerSelection;
    pc.textContent="PLAYER CHOICE:     " + playerSelection;
  
    if (playerSelection == computerSelection) {
        resultDiv.textContent="Tie";

    }else if (playerSelection == "rock") {

        if (computerSelection == "paper") {
            resultDiv.textContent="You lose ! Paper beats Rock";
            computerScore++;
        }else if (computerSelection == "scissor") {
            resultDiv.textContent="You win  ! Rock beats Scissor";
            playerScore++;
        }

    }else if (playerSelection == "paper") {
        if (computerSelection == "scissor") {
            resultDiv.textContent="You lose ! Scissors beats Paper";
            computerScore++;
        }else if (computerSelection == "rock"){
            resultDiv.textContent="You win  ! Paper beats Rock";
            playerScore++;
        }

    }else if (playerSelection == "scissor") {  
        if (computerSelection == "rock") {
            resultDiv.textContent="You lose ! Rock beats Scissor";
            computerScore++;
        }else if (computerSelection == "paper"){
            resultDiv.textContent="You win  ! Scissors beats paper";
            playerScore++;
        }
        
    }else {
        resultDiv.textContent="Select rock paper or scissor";
    }
  
    const rc = document.getElementById("rc");
    const rp = document.getElementById("rp");
  
  
    rc.textContent="COMPUTER SCORE :-" + computerScore;
    rp.textContent="PLAYER SCORE :-" + playerScore;
    
    if (playerScore === 5) {
        resultDiv.textContent = "Congratulations! You won the game!";
        resetGame();
    } else if (computerScore === 5) {
        resultDiv.textContent = "Computer wins the game. Better luck next time!";
        resetGame();
    }
   
}

function resetGame() {
    computerScore = 0;
    playerScore = 0;
}

//event liseners part2 project
function handleClick(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    console.log(result);
}

var rockButton = document.getElementById("rock");
rockButton.addEventListener("click", function () {
    handleClick('rock')
});

var paperButton = document.getElementById("paper");
paperButton.addEventListener("click", function () {
    handleClick('paper')
});

var scissorsButton = document.getElementById("scissor");
scissorsButton.addEventListener("click", function () {
    handleClick('scissor')
});


// // function game() {

// //      let computercount = 0;
// //      let playercount = 0;
// //     //1.call for loop 5 times
// //    // let ans = playRound();

// //         for (let i = 1;i <= 5;i++) {
// //         let result = playRound(playerSelection(),getComputerChoice());
// //         //let result = handleClick();
// //         //console.log(result);

// //         if (result.slice(0,10) == "You lose !") {
// //             computercount++;
// //         }
// //         if (result.slice(0,10) == "You win  !") {
// //             playercount++;
// //         }
// //         if (result == "Tie"){
// //             playercount++;
// //             computercount++;
// //         }
        
// //     }

// //     if (playercount === 5) {
// //         console.log("player win with score " + playercount);

// //     }else if(computercount === 5) {
// //         console.log("computer win with score " + computercount);
// //     }else {
// //         console.log("Tie with equal score ");
// //     }
// // }
// // game();