
let scoreBoard = document.querySelector(".score-board");
let playerScore = 0; 
let cpuScore = 0; 

let gameActive = true; 

const characters = document.querySelector(".characters");
const pomeranian = document.getElementById("pomeranian");

const shiba = document.getElementById("shiba");
shiba.style.width = "60px";
shiba.style.height = "60px";

const dachshund = document.getElementById("dachshund");

const left = document.querySelector(".left");
const center = document.querySelector(".center");
const right = document.querySelector(".right");

const scene1 = document.getElementById("scene-1");
const scene2 = document.getElementById("scene-2");

scene2.style.display = "none";

let selectedPlayer = ""; 
let playerImg = ""; 

let playerSelection = document.querySelector(".player-selection");

let resetButton = document.getElementById("reset-button");
let buttonContent = document.createElement("div");
buttonContent.textContent = "Play again?";
resetButton.appendChild(buttonContent);
resetButton.style.display = "none";

//animation function 
const instructions = document.querySelector(".instructions");
const win = document.querySelector(".win");
const lose = document.querySelector(".lose");
const draw = document.querySelector(".draw");
const playerVictory = document.querySelector(".player-victory"); 
const cpuVictory = document.querySelector(".cpu-victory");


//star animation 
function addStar (buttonId, imagePath) {
    const button = document.getElementById(buttonId);
    const wrapper = button.parentElement;

    button.addEventListener('mouseenter', () => {
        if(!wrapper.querySelector('.background-star')) {
            const star = document.createElement("img");
            star.src = 'images/star.png';
            star.className = 'background-star';
            wrapper.insertBefore(star, button);
        }
    });

    button.addEventListener('mouseleave', () => {
        const star = wrapper.querySelector(".background-star");
        if (star) star.remove();
    } )
}

function addStar2 (selectionChoice, imagePath) {
    const selectionButton = document.querySelector(selectionChoice);
    const wrapper2 = selectionButton.parentElement;

    selectionButton.addEventListener('mouseenter', () => {
        if(!wrapper2.querySelector('.background-star')) {
            const star2 = document.createElement("img");
            star2.src = 'images/star2.png';
            star2.className = 'background-star';
            wrapper2.insertBefore(star2, selectionButton);
        }
    });

    selectionButton.addEventListener('mouseleave', () => {
        const star2 = wrapper2.querySelector(".background-star");
        if (star2) star2.remove();
    } )
}

function textAnimation (message) { 

    instructions.style.opacity = 0;
    win.style.opacity = 0;
    lose.style.opacity = 0;
    draw.style.opacity = 0;

    message.style.opacity = 1;

}

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

function startGame () {
        addStar("pomeranian", "star.png");
        addStar("shiba", "star.png");
        addStar("dachshund", "star.png");

        scene1.addEventListener('click', (e) => {
            console.log("Click detected");
            if (e.target.closest ("button")) {
                selectedPlayer = e.target.alt || e.target.querySelector("img")?.alt;
                console.log ("Selected:", selectedPlayer);
                
                scene1.style.display = "none";
    
                scene2.style.display = "flex"; 
    
                //animate instruction
                setTimeout(() => textAnimation(instructions), 100);
          
                playerImg;
    
                if (selectedPlayer === "pomeranian") {
                    playerImg = pomeranian.querySelector("img").cloneNode();
                } else if (selectedPlayer === "shiba") {
                    playerImg = shiba.querySelector("img").cloneNode();
                } else if (selectedPlayer === "dachshund") {
                    playerImg = dachshund.querySelector("img").cloneNode();
                }
    
                if (playerImg) {
                    playerImg.style.width = "80px";
                    playerImg.style.height = "80px";
                    player.innerHTML = "";
                    player.appendChild(playerImg);
                }
            }
        })
    } 
startGame();
gameLoop();

function gameLoop () {
    addStar2(".rock", "star2.png");
    addStar2(".paper", "star2.png");
    addStar2(".scissors", "star2.png");
    playerSelection.addEventListener('click', (e) => {
        console.log("Click detected"); 
        if (!gameActive) return;

        let playerChoice = e.target.alt || e.target.querySelector("img")?.alt;
        console.log("Player shoots", playerChoice);
        
        let computerChoice = getComputerChoice();
        console.log("Computer shoots", computerChoice);
        let result = "";
    
        if (playerChoice === computerChoice) {
            setTimeout(() => textAnimation(draw), 100);
            result = "draw";
        } else if (
            (playerChoice === "rock" && computerChoice === "paper") ||
            (playerChoice === "scissors" && computerChoice === "rock") ||
            (playerChoice === "paper" && computerChoice === "scissors")) {
                setTimeout(() => textAnimation(lose), 100);
                result = "cpu win";
            } else {
                setTimeout(() => textAnimation(win), 100);
                result = "player win";
            }
            console.log(result);

            function updateScore(result) {
                if (result === "player win") {
                    playerScore ++;
                } else if (result === "cpu win") {
                    cpuScore ++;
                } 
            }

            function displayScore() {
                scoreBoard.textContent = `${playerScore} : ${cpuScore}`;
            }


                function matchSet () {
                    if (playerScore === 5) {
                        gameActive = false;
                        setTimeout(() => {
                            textAnimation(playerVictory);
                            resetButton.style.display = 'flex';
                        } , 100);
                    } else if (cpuScore === 5) {
                        gameActive = false;
                        setTimeout(() => {
                            textAnimation(cpuVictory);
                            resetButton.style.display = 'flex';
                        } , 100); 
                    }
                }

            updateScore(result);
            displayScore();
            matchSet(); 
    })

    resetButton.addEventListener("click", function(){
        resetGame();
    })}


//reset function
function resetGame () {
    cpuScore = 0;
    playerScore = 0; 
    scoreBoard.textContent = `${playerScore} : ${cpuScore}`; 
    scene1.style.display = "flex"; 
    scene2.style.display = "none";
    instructions.style.opacity = 1;
    win.style.opacity = 0; 
    draw.style.opacity = 0; 
    lose.style.opacity = 0;  
    playerVictory.style.opacity = 0; 
    cpuVictory.style.opacity = 0; 
    selectedPlayer = ""; 
    resetButton.style.display = "none";
    gameActive = true;
}


