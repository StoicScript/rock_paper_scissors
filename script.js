console.log("hello bitches")

const weapons = document.querySelectorAll('.weapon')
const buttons = document.querySelector('.buttons')
const results = document.getElementById('results')
const player = document.getElementById('playerScore')
const computer = document.getElementById('computerScore')
const winner = document.getElementById('winner')
const resetBtn = document.getElementById('reset')
const winImg = document.getElementById('harold-win')
const loseImg = document.getElementById('harold-lose')
const playerImg = document.getElementById('playerChoice')
const compImg = document.getElementById('compChoice')

const rockImg = "<img src='./rock.png' width=150px>"
const paperImg = "<img src='./paper.png' width=150px>"
const sciImg = "<img src='./scissors.png' width=150px>"

let compScore = 0;
let playerScore = 0;

player.innerText = `You: ${playerScore}`;
computer.innerText = `Computer: ${compScore}`;
results.innerText = 'Select your weapon to begin!'
resetBtn.hidden = true;
winImg.hidden = true;
loseImg.hidden = true;

weapons.forEach(weapon => {
    weapon.addEventListener('click', (e) => {
         let selection = e.target.id;
         let compSelection = computerSelection();
         results.textContent = (playRound(selection, compSelection));
         player.innerText = `You: ${playerScore}`;
         computer.innerText = `Computer: ${compScore}`;
         winner.innerText = '';
            if(playerScore === 5){
                winner.innerText = 'YOU WIN!'
                reset();
                winImg.hidden = false;
            } else if(compScore === 5){
                winner.innerText = 'YOU LOSE'
                reset();
                loseImg.hidden = false;
            }
        })
})

resetBtn.addEventListener('click', () => {
    playerScore = 0;
    compScore = 0;
    player.innerText = `You: ${playerScore}`;
    computer.innerText = `Computer: ${compScore}`;
    results.innerText = 'Select your weapon to begin!'
    winner.innerText = '';
    buttons.hidden = false;
    resetBtn.hidden = true;
    winImg.hidden = true;
    loseImg.hidden = true;
})

function reset(){
    buttons.hidden=true;
    resetBtn.hidden = false;
}

function computerSelection(){
    let selection = (Math.floor(Math.random()*3)+1);
    if(selection === 1){
        return "Rock"
    } else if (selection === 2){
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection){

    if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        playerScore += 1;
        playerImg.innerHTML = rockImg;
        compImg.innerHTML = sciImg;
        return "You win! Rock beats Scissors."
    } else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
        playerScore += 1;
        playerImg.innerHTML = paperImg;
        compImg.innerHTML = rockImg;
        return "You win! Paper beats Rock."
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
        playerScore += 1;
        playerImg.innerHTML = sciImg;
        compImg.innerHTML = paperImg;
        return "You win! Scissors beats Paper."
    } else if(playerSelection === 'Rock' && computerSelection === 'Paper'){
        compScore += 1;
        playerImg.innerHTML = rockImg;
        compImg.innerHTML = paperImg;
        return "You lose! Computer chose Paper."
    } else if(playerSelection === 'Paper' && computerSelection === 'Scissors'){
        compScore += 1;
        playerImg.innerHTML = paperImg;
        compImg.innerHTML = sciImg;
        return "You lose! Computer chose Scissors."
    } else if(playerSelection === 'Scissors' && computerSelection === 'Rock'){
        compScore += 1;
        playerImg.innerHTML = sciImg;
        compImg.innerHTML = rockImg;
        return "You lose! Computer chose Rock."
    } else {
        if(playerSelection === 'Rock'){
            playerImg.innerHTML = rockImg;
            compImg.innerHTML = rockImg;
        } else if(playerSelection === 'Scissors'){
            playerImg.innerHTML = sciImg;
            compImg.innerHTML = sciImg;
        } else {
            playerImg.innerHTML = paperImg;
            compImg.innerHTML = paperImg;
        }
        return `Tie Game! You both chose ${playerSelection}.`
    }
}