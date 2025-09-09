const buttons = document.querySelectorAll("button");
const result = document.querySelector("result");

function computerMove() {
  const move = Math.floor(Math.random() * 3) + 1;

  if (move === 1) {
    return "rock";
  } else if (move === 2) {
    return "paper";
  } else if (move === 3) {
    return "scissors";
  } else {
    return "choose again";
  }
}

const score = {
  win: 0,
  lose: 0,
  tie: 0
};


function playGame(playerMove) {
  const computerSelection = computerMove();
  let result = "";

  if (playerMove === computerSelection) {
    result = "Its a tie";
  } else if (
    (playerMove === "rock" && computerSelection === "scissors") ||
    (playerMove === "paper" && computerSelection === "rock") ||
    (playerMove === "scissors" && computerSelection === "paper")
  ) {
    result = "You win";
  } else {
    result = "You lose";
  }

  

// win lose score
  if (result === 'You win') {
    score.win += 1
  }else if (result === 'You lose') {
    score.lose += 1
  }else if (result === 'Its a tie') {
    score.tie += 1
  }

  document.getElementById("result").innerText = `You choose ${playerMove}, computer choose ${computerSelection}. ${result}`;

  document.getElementById("score").innerText = `win:${score.win}, lose:${score.lose}, tie:${score.tie}`;
}

function resetGame() {
  document.getElementById("result").innerText = "";
  document.getElementById("score").innerText = "";
  score.win = 0;
  score.lose = 0;
  score.tie = 0;
}

