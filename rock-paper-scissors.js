function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function getHumanChoice() {
    let choice = prompt("rock, paper, or scissors?");
    return choice;
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0; 

    function playRound(humanChoice, computerChoice) {
        if(humanChoice == computerChoice) {
            console.log("Tie! No one wins.");
        }else if(humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats rock!");
            computerScore++;
        }else if(humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Scissors beats paper!");
            computerScore++;
        }else if(humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Rock beats scissors!");
            computerScore++;
        }else{
            humanScore++;
            console.log("You win!")
        }
    }

    for(let i = 0; i < 5; i++) {
        console.log("round " + i);
        const humanChoice = getHumanChoice().toLowerCase();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log("Your score: " + humanScore + " Bot score: " + computerScore);
}

playGame();

