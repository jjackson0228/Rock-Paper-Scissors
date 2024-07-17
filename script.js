document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".choice");
  const gameChoices = ["rock", "paper", "scissors"]; //added array with gameChoices
  const displayResult = document.getElementById("result");
  const displayWins = document.getElementById("wins");
  const displayTies = document.getElementById("ties");
  const displayLosses = document.getElementById("losses");
  const displayRockCount = document.getElementById("rock");
  const displayPaperCount = document.getElementById("paper");
  const displayScissorsCount = document.getElementById("scissors");
  //create object to track our statistics
  const stats = {
    wins: 0,
    ties: 0,
    losses: 0,
    count: {
      rock: 0,
      paper: 0,
      scissors: 0,
    },
  };

  function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "YOU WIN!";
    } else {
      return "COMPUTER WINS!";
    }
  }

  function updateStats(result, userChoice) {
    if (result === "YOU WIN!") {
      stats.wins++;
    } else if (result === "It's a tie!") {
      stats.ties++;
    } else {
      stats.losses++;
    }
    //update count for users choice
    stats.count[userChoice]++;
  }

  //display the counts fo each choice
  function updateDisplay() {
    displayWins.textContent = `Wins: ${stats.wins}`;
    displayTies.textContent = `Ties: ${stats.ties}`;
    displayLosses.textContent = `Losses ${stats.losses}`;

    //display the counts for each choice
    displayRockCount.textContent = `Rock: ${stats.count.rock}`;
    displayPaperCount.textContent = `Paper: ${stats.count.paper}`;
    displayScissorsCount.textContent = `Scissors: ${stats.count.scissors}`;
  }
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const userChoice = button.id;
      const computerChoice =
        gameChoices[Math.floor(Math.random() * gameChoices.length)];
      const result = getResult(userChoice, computerChoice);

      displayResult.textContent = `You chose ${userChoice}, computer chooses ${computerChoice}. ${result}`;
      // Clear previous result classes
      displayResult.classList.remove("win", "loss", "tie");

      // Add appropriate class based on result
      if (result === "YOU WIN!") {
        displayResult.classList.add("win");
      } else if (result === "It's a tie!") {
        displayResult.classList.add("tie");
      } else {
        displayResult.classList.add("loss");
      }

      //added function to update stat reuslt and display
      updateStats(result, userChoice);
      updateDisplay();
    });
  });
});
