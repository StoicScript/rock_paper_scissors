console.log("hello bitches")


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

function playerSelection(){
    let selection = prompt("Please select your weapon").toLowerCase();
    selection = selection.charAt(0).toUpperCase() + selection.slice(1);

    if(selection != 'Rock' && selection != 'Paper' && selection != 'Scissors'){
        alert("That's not a weapon, try again.")
        playerSelection()
    } else {
        return selection;
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
        computerScore += 1;
        return "You lose! Paper beats Rock."
    } else if(playerSelection === 'Paper' && computerSelection === 'Scissors'){
        computerScore += 1;
        return "You lose! Scissors beats Paper."
    } else if(playerSelection === 'Scissors' && computerSelection === 'Rock'){
        computerScore += 1;
        return "You lose! Rock beats Scissors."
    } else {
        return "Tie Game!"
    }
}

let playerScore = 0;
let computerScore = 0

function game(){
    for( let i = 0; i < 5; i++){
        console.log(playRound(playerSelection(), computerSelection()));
    }
    console.log(`Game over. Computer: ${computerScore} - Player: ${playerScore}.`)  
}