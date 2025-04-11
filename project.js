let humanScore = 0; 
let computerScore = 0;

function getComputerChoice () {
    let randomNum = Number(Math.random().toPrecision(2));
    if (randomNum >= 0.66 && randomNum < 1) {
        return "paper"
    } else if (randomNum >= 0.33 && randomNum <0.66) {
        return "scissors"
    } else {
        return "rock"
    }
}

function getHumanChoice () {
    let sign = prompt ("Choose your fighter! Rock, paper, or scissors?")
    if (sign === "rock") {
        return "rock"
    } else if (sign === "paper") {
        return "paper";
    } else {
        return "scissors";
    }
}


function playGame () {
    function playRound (humanSelection, computerSelection) {
        if (humanSelection === computerSelection) {
            return "draw" 
        } else if (
            (humanSelection === "rock" && computerSelection === "paper") ||
            (humanSelection === "scissors" && computerSelection === "rock") ||
            (humanSelection === "paper" && computerSelection === "scissors")
        ) {
            return `CPU chose ${computerSelection} & wins!`
        } else {
            return "you win!"
        }
    }
    
    
    function updateScore (result) {
        if (result === "draw") {
            computerScore +0; 
        } else if (result === "you win!") {
            humanScore ++;
        } else {
            computerScore ++;
        }
    }

    for (let i = 0; i <5; i++) {
        let humanSelection = getHumanChoice().toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playRound (humanSelection, computerSelection);
        console.log(result);
        updateScore(result);
    }

    console.log(`Score: You - ${humanScore}, CPU - ${computerScore}`);
    message(humanScore, computerScore);
}

function message (humanScore, computerScore) {
    if (humanScore === computerScore) {
        console.log("it's a tie!")
    } else if (humanScore > computerScore) {
        console.log("you win!") 
    } else {
        console.log("CPU wins!")
    }
}

playGame();