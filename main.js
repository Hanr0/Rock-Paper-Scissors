let rpsArray = ["rock", "paper", "scissors"]; //  a global array with whe values of "rock,paper,scissors" in it
let roundCount = 0
let playerScore = 0
let computerScore = 0

// create function called computerPlay() what randomly returns  either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
  let zeroTo2 = Math.floor(Math.random() * 3); //a random number from 0 to 2 (included) in a variable called zeroTo2

  compChoice = rpsArray[zeroTo2]; //  a variable for the computer choice with the value of the rpsArray where the index position is zeroTo2

  return compChoice;
}
const display = document.querySelector("#display")
const scoreBoard = document.querySelector('#scoreBoard')
const buttons = document.querySelectorAll(".playerChoiceBut")

buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    roundCount++;
    compChoice = computerPlay();
    result = playRound(button.id,compChoice);
    playerScore += result[0];
    computerScore += result[1];
    display.innerHTML = `<h3>You chose ${button.id}, the computer chose ${compChoice}</h3>`;
    scoreBoard.innerHTML = `<p>player score:${playerScore}</p><p>computer score:${computerScore}</p><p>round:${roundCount}</p>`;
    if (roundCount >= 5){
      scoreBoard.innerHTML = "";
      if (playerScore > computerScore){
        display.innerHTML = "<h1>YOU WIN!</h1>"
      } else if (playerScore < computerScore){
        display.innerHTML = "<h1>YOU LOSE!</h1>"
      } else {
        display.innerHTML = "<h1>Its a tie... </h1>"
      };
      


    };

  });
});

function computerPlay(){

  let zeroTo2 = Math.floor(Math.random() * 3);  //a random number from 0 to 2 (included) in a variable called zeroTo2
  // console.log(`random number:${zeroTo2}`)

  const rpsArray = ["rock","paper","scissors"] //  an array with whe values of "rock,paper,scissors" in it

  compChoice = rpsArray[zeroTo2]  //  a variable with the value of the rpsArray where the index position is zeroTo2
  // console.log(compChoice)

  return compChoice
}

// returns a boolian of each player who won. 
function playRound(playerChoice,computerChoice) {
  
  if (playerChoice === computerChoice){
    return [false,false]
  } else if ((playerChoice === "rock" && computerChoice === "scissors") ||
  (playerChoice === "paper" && computerChoice === "rock") ||
  (playerChoice === "scissors" && computerChoice === "paper")) {
    return [true,false]
  } else if ((playerChoice === "scissors" && computerChoice === "rock") ||
  (playerChoice === "rock" && computerChoice === "paper") ||
  (playerChoice === "paper" && computerChoice === "scissors")) {
    return [false,true]
  }
  
  
};