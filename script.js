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

while (keepPlaying) {
  let userChoice = window.prompt("Enter R, P, or S:");

  //   if user pressed cancel immediately end function
  if (!userChoice) {
    return;
  }
}
