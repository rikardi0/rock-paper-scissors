function computerPlay() {
    let selection = ["rock", "paper", "scissor"];
    let computer = selection[Math.floor(Math.random() * selection.length)];
    return (computer);
    console.log(computer); 
}
function remove() {
    
    body.removeChild(instructions);
    points.removeChild(scoreGame);
}
let scorePlayer = 0;
let scoreCpu = 0;
let round = 0

const results = document.querySelector('#result')
const body = document.querySelector('body')
const instructions = document.querySelector('#instruction')

const winLossTie = document.createElement('p');
results.appendChild(winLossTie);

const points = document.querySelector('#score');
const buttons = document.querySelector('#btn');
const scoreGame = document.createElement('p');
points.appendChild(scoreGame);


function playRound(playerSelection, computerSelection) { 
    if (computerSelection == "scissor" && playerSelection == "rock"||
    computerSelection == "paper" && playerSelection == "scissor"||
    computerSelection == "rock" && playerSelection == "paper") {
    scorePlayer++;
    round++;
    winLossTie.textContent = `You Win , ${playerSelection} beat ${computerSelection}`
    scoreGame.textContent = `Player: ${scorePlayer} CPU: ${scoreCpu}`
}

else if (computerSelection == "paper" && playerSelection == "rock"||
computerSelection == "scissor" && playerSelection == "paper"||
computerSelection == "rock" && playerSelection == "scissor") {
    scoreCpu++;
    round++;
    winLossTie.textContent = `You loss , ${computerSelection} beat ${playerSelection}`; 
    scoreGame.textContent = `Player: ${scorePlayer} CPU: ${scoreCpu}`;
}

else if (computerSelection == playerSelection) {
    round++;
    winLossTie.textContent = `Is  a  tie , ${computerSelection} = ${playerSelection}`
    scoreGame.textContent = `Player: ${scorePlayer} CPU: ${scoreCpu}`;
}
const final = document.querySelector('#final');
if (round == 5 && scorePlayer > scoreCpu) {
    const won = document.createElement('h1');

    won.textContent = "Congratulations  ,  you  won  the  game";
    const tryAgain = document.createElement('button');
    tryAgain.addEventListener('click', () => {
        location.reload()
    });
    tryAgain.textContent = "Play Again";
    tryAgain.style['background-color'] = "rgb(45, 148, 91)";
    final.appendChild(won);
    final.appendChild(tryAgain);
    results.removeChild(winLossTie);
    remove();

}
else if (round == 5 && scorePlayer < scoreCpu) {
    const lost = document.createElement('h1')
    lost.textContent = "You  lost  ,  try  again";
    const tryAgain = document.createElement('button');
    tryAgain.addEventListener('click', () => {
        location.reload()
    }
    );
    tryAgain.textContent = "Play Again"
    tryAgain.style['background-color'] = "rgb(119, 21, 21)";
    final.appendChild(lost);
    final.appendChild(tryAgain);
    results.removeChild(winLossTie);
    remove();
}
else if (round == 5 && scorePlayer == scoreCpu) {
    const draw = document.createElement('h1')
    draw.textContent = " Is  a  draw  ,  try  again";
    const tryAgain = document.createElement('button');
    tryAgain.addEventListener('click', () => {
        location.reload()
    }
    );
    tryAgain.textContent = "Play Again";
    tryAgain.style['background-color'] = "rgb(153, 149, 149)";
    final.appendChild(draw);
    final.appendChild(tryAgain);
    results.removeChild(winLossTie);
    remove();
}}
const rockSelect = document.querySelector('#rock');
rockSelect.addEventListener('click', () => {
    playRound('rock', computerPlay());
    
});
const paperSelect = document.querySelector('#paper');
paperSelect.addEventListener('click', () => {
    playRound('paper', computerPlay());
   
});
const scissorSelect = document.querySelector('#scissor');
scissorSelect.addEventListener('click', () => {
    playRound('scissor', computerPlay());
    
});