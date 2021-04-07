function computerPlay() {
    let selection = ["rock", "paper", "scissor"];
    let computer = selection[Math.floor(Math.random() * selection.length)];
    return computer;
  }

  let scorePlayer = 0;
  let scoreCpu = 0;
  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissor"
      || playerSelection == "paper" && computerSelection == "rock"
      || playerSelection == "scissor" && computerSelection == "paper") {
      scorePlayer++;
      alert(`you win score: ${scorePlayer} to ${scoreCpu}`);
    }
    else if (computerSelection == "rock" && playerSelection == "scissor"
      || computerSelection == "paper" && playerSelection == "rock"
      || computerSelection == "scissor" && playerSelection == "paper") {
      scoreCpu++;
      alert(`upsss you lost score: ${scorePlayer} to ${scoreCpu}`);
    }
    else {
      alert(`Is a tie score: ${scorePlayer} to ${scoreCpu}`);
    }
  }

  function game() {
    for (i = 0; i < 5; i++) {
      let playerSelection = prompt("rock, paper, scissor");
      let computerSelection = computerPlay();
      playerSelection = playerSelection.toLowerCase();

      playRound(playerSelection, computerSelection);

    }
    if (scorePlayer > scoreCpu) {
      alert("Congratulation you won the game")
    }
    else if (scoreCpu == scorePlayer) {
      alert("Is a draw ")
    }

    else {
      alert("You lost, try again")
    }
  }
  game();
