console.log("hello bitches")

const buttons = document.querySelectorAll('.weapon')
const results = document.getElementById('results')
const player = document.getElementById('playerScore')
const computer = document.getElementById('computerScore')
const winner = document.getElementById('winner')
const resetBtn = document.getElementById('reset')

let compScore = 0;
let playerScore = 0;

player.innerText = `You: ${playerScore}`;
computer.innerText = `Computer: ${compScore}`;
results.innerText = 'Select your weapon to begin!'
resetBtn.hidden = true;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
         let selection = e.target.textContent;
         let compSelection = computerSelection();
         results.textContent = (playRound(selection, compSelection));
         console.log(playerScore, compScore);
         player.innerText = `You: ${playerScore}`;
         computer.innerText = `Computer: ${compScore}`;
         winner.innerText = '';
            if(playerScore === 5){
                winner.innerText = 'YOU WIN!'
                reset();
            } else if(compScore === 5){
                winner.innerText = 'YOU LOSE'
                reset();
            }
        })
})

resetBtn.addEventListener('click', () => {
    playerScore = 0;
    compScore = 0;
    player.innerText = `You: ${playerScore}`;
    computer.innerText = `Computer: ${compScore}`;
    results.innerText = 'Select your weapon to begin!'
    winner.innerText = ''
    buttons.forEach(button => button.hidden = false)
    resetBtn.hidden = true;
})

function reset(){
    buttons.forEach(button => button.hidden = true)
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
        return "You win! Rock beats Scissors."
    } else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
        playerScore += 1;
        return "You win! Paper beats Rock."
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
        playerScore += 1;
        return "You win! Scissors beats Paper."
    } else if(playerSelection === 'Rock' && computerSelection === 'Paper'){
        compScore += 1;
        return "You lose! Paper beats Rock."
    } else if(playerSelection === 'Paper' && computerSelection === 'Scissors'){
        compScore += 1;
        return "You lose! Scissors beats Paper."
    } else if(playerSelection === 'Scissors' && computerSelection === 'Rock'){
        compScore += 1;
        return "You lose! Rock beats Scissors."
    } else {
        return "Tie Game!"
    }
}