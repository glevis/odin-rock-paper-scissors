function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function getHumanChoice() {
    let choice = prompt("rock, paper, or scissors?");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    const results = document.getElementById('results');
    console.log("playing round");
    if(humanChoice == computerChoice) {
        results.textContent = "Tie! No one wins.";
    }else if(humanChoice == "rock" && computerChoice == "paper") {
        results.textContent = "You lose! Paper beats rock!";
        computerScore++;
    }else if(humanChoice == "paper" && computerChoice == "scissors") {
        results.textContent = "You lose! Scissors beats paper!";
        computerScore++;
    }else if(humanChoice == "scissors" && computerChoice == "rock") {
        results.textContent = "You lose! Rock beats scissors!";
        computerScore++;
    }else{
        results.textContent = "You win!";
        humanScore++;
    }
    results.textContent = results.textContent + " Score: " + humanScore + " " + "Computer Score: " + computerScore;
    if(humanScore == 5) {
        results.textContent = "You win the game!";
        humanScore = 0;
        computerScore = 0;
    }
    if(computerScore == 5) {
        results.textContent = "Computer wins the game!";
        humanScore = 0;
        computerScore = 0;
    }
}

let humanScore = 0;
let computerScore = 0; 

const buttons = document.querySelectorAll('button');
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        playRound(button.id, computerChoice);
    });
});


