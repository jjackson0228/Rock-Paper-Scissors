document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("gameButton");
  const message = document.getElementById("message");

  button.addEventListener("click", function () {
    message.textContent = "Hand Played!";
    button.disabled = true;
  });
});
const playGame = function () {
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
  console.log(stats); //logging stats to console
};

//make an array of options for computer to pick from
const options = ["R", "P", "S"];
console.log(options); //console log to show options
let keepPlaying = true;

//loop until user wants to stop

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("gameButton");
  const message = document.getElementById("message");

  button.addEventListener("click", function () {
    message.textContent = "Hand Played!";
    button.disabled = true;
  });
});
//loop until user wants to stop
