let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame(userChoice, compChoice);
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      userWin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userWin = compChoice === "Scissors" ? false : true;
    } else {
      userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const drawGame = (userChoice, compChoice) => {
  msg.innerText = "Game was Draw. Play again.";
  dispChoices.innerText = `Your Choice: ${userChoice}\nComputer's Choice: ${compChoice}`
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin === true) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Won!`;
    dispChoices.innerText = `Your Choice: ${userChoice}\nComputer's Choice: ${compChoice}\n${userChoice} beats ${compChoice}.`
    msg.style.backgroundColor = "green";
    msg.style.padding = "1.5rem";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lost!`;
    dispChoices.innerText = `Your Choice: ${userChoice}\nComputer's Choice: ${compChoice}\n${compChoice} beats ${userChoice}.`
    msg.style.backgroundColor = "red";
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});