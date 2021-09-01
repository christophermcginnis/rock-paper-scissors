const startButtonContainer = document.querySelector('.start-game');
const startButton = document.getElementById('start-game');
const mainContainer = document.querySelector('.container');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const rockImg = document.querySelector('#rock-img');
const paperImg = document.querySelector('#paper-img');
const scissorsImg = document.querySelector('#scissors-img');
const messageAtBottom = document.getElementById('winner');
const cpuRockImg = document.querySelector('#cpu-rock-img');
const cpuPaperImg = document.querySelector('#cpu-paper-img');
const cpuScissorsImg = document.querySelector('#cpu-scissors-img');
const endGameMessage = document.querySelector(".end-game");
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const resetButton = document.getElementById("restart");


function startGame() {
    startButton.setAttribute('style', 'display: none');
    startButtonContainer.setAttribute('style', 'display: none');
    mainContainer.removeAttribute('style', 'display: none');
}

rockButton.addEventListener('click', () => {
    rockImg.removeAttribute('style', 'display: none');
    paperImg.setAttribute('style', 'display: none');
    scissorsImg.setAttribute('style', 'display: none');
    playRound(0);
    endGame()
});

paperButton.addEventListener('click', () => {
    paperImg.removeAttribute('style', 'display: none');
    rockImg.setAttribute('style', 'display: none');
    scissorsImg.setAttribute('style', 'display: none');
    playRound(1);
    endGame()
})

scissorsButton.addEventListener('click', () => {
    scissorsImg.removeAttribute('style', 'display: none');
    paperImg.setAttribute('style', 'display: none');
    rockImg.setAttribute('style', 'display: none');
    playRound(2);
    endGame();
})

function computerPlay() {
    let values = ["Rock", "Paper", "Scissors"];
    chosenValue = values[Math.floor(Math.random() * values.length)].toUpperCase();
    if (chosenValue == "ROCK") {
        cpuRockImg.removeAttribute('style', 'display: none');
        cpuPaperImg.setAttribute('style', 'display: none');
        cpuScissorsImg.setAttribute('style', 'display: none');
        return chosenValue = 0;
    } else if (chosenValue == "PAPER") {
        cpuPaperImg.removeAttribute('style', 'display: none');
        cpuRockImg.setAttribute('style', 'display: none');
        cpuScissorsImg.setAttribute('style', 'display: none');
        return chosenValue = 1;
    } else if (chosenValue == "SCISSORS") {
        cpuScissorsImg.removeAttribute('style', 'display: none');
        cpuPaperImg.setAttribute('style', 'display: none');
        cpuRockImg.setAttribute('style', 'display: none');
        return chosenValue = 2;
    }
}

let playerWin = 0;
let computerWin = 0;

function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        messageAtBottom.innerText = ("It's a draw!");
        return;
    } else if (playerSelection == 0 && computerSelection == 1) {
        computerWin++;
        messageAtBottom.innerText = ("You lose! Paper beats rock!");
        computerScore.innerText = (computerWin);
        return;
    } else if (playerSelection == 0 && computerSelection == 2) {
        playerWin++;
        messageAtBottom.innerText = ("You win! Rock beats Scissors!");
        playerScore.innerText = (playerWin);
        return;
    } else if (playerSelection == 1 && computerSelection == 0) {
        playerWin++
        messageAtBottom.innerText = ("You win! Paper beats rock!");
        playerScore.innerText = (playerWin);
        return;
    } else if (playerSelection == 1 && computerSelection == 2) {
        computerWin++;
        messageAtBottom.innerText = ("You lose! Scissors beats paper!");
        computerScore.innerText = (computerWin);
        return;
    } else if (playerSelection == 2 && computerSelection == 0) {
        computerWin++;
        messageAtBottom.innerText = ("You lose! Rock beats Scissors!");
        computerScore.innerText = (computerWin);
        return;
    } else if (playerSelection == 2 && computerSelection == 1) {
        playerWin++;
        messageAtBottom.innerText = ("You win! Scissors beats paper!");
        playerScore.innerText = (playerWin);
        return;
    } else {
        messageAtBottom.innerText = ("Please choose an option");
        return;
    }


}

function endGame() {
    if (playerWin == 5) {
        mainContainer.setAttribute('style', 'display: none');
        startButtonContainer.removeAttribute('style', 'display: none');
        endGameMessage.removeAttribute('style', 'display: none');
        resetButton.removeAttribute('style', 'display: none');
        endGameMessage.innerText = ("Congratulations! You've won!");
    } else if (computerWin == 5) {
        mainContainer.setAttribute('style', 'display: none');
        startButtonContainer.removeAttribute('style', 'display: none');
        endGameMessage.removeAttribute('style', 'display: none');
        resetButton.removeAttribute('style', 'display: none');
        endGameMessage.innerText = ("Sorry! You've lost!");
    }

}












