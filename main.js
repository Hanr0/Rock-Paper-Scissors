let rpsArray = ["rock", "paper", "scissors"]; //  a global array with whe values of "rock,paper,scissors" in it

// create function called computerPlay() what randomly returns  either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
  let zeroTo2 = Math.floor(Math.random() * 3); //a random number from 0 to 2 (included) in a variable called zeroTo2

  compChoice = rpsArray[zeroTo2]; //  a variable for the computer choice with the value of the rpsArray where the index position is zeroTo2

  return compChoice;
}

// a helpfunction to be used as an argument for playround().
// it prompts the player to ask for either rock paper or scissors.
// it checks if the choice is valid and returns the choice as a string.
function playerSelection() {
  // prompt player choice and store it in a variable. Make the variable all lower case.
  let playerPrompt = prompt(
    'What is your choice:"rock","paper" or "scissors"?'
  ).toLocaleLowerCase();

  // while loop to check if player choice is a valid choice.
  while (!rpsArray.includes(playerPrompt)) {
    playerPrompt = prompt(
      `${playerPrompt} is not a valid choice.\nPlease choose:"rock","paper" or "scissors"?`
    ).toLocaleLowerCase();
  }

  return playerPrompt;
}

// The a helpfunction to be used in game()
// playRound() takes two arguments: playerSelection, and computerSelection.
// it compares the two arguments and returns a winner as a string text.
function playRound(playerSelection, computerSelection) {
  let playerChoice = playerSelection;
  let computerChoice = computerSelection;
  let result = "";
  console.log(playerChoice, computerChoice);

  if (playerChoice === computerChoice) {
    result = `You chose ${playerChoice} computer also chose ${computerChoice}.\nIts a Tie!`;
  } else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    result = `You chose ${playerChoice} computer chose ${computerChoice}.\n you win this round!`;
  } else if (
    (playerChoice == "scissors" && computerChoice == "rock") ||
    (playerChoice == "rock" && computerChoice == "paper") ||
    (playerChoice == "paper" && computerChoice == "scissors")
  ) {
    result =
      result = `You chose ${playerChoice} computer chose ${computerChoice}.\nthe computer wins this round!`;
  }

  return result;
}

// the main function of the game.
// it takes one argument numRounds to determine the number of rounds to be played.
function game(numRounds) {
  let roundCount = 1; // a counter to keep track which round it is
  let playerScore = 0; // a counter to keep track of the players score
  let computerScore = 0; // a counter to keep track of the computers score
  let scoreBoard = ''; // an initial empty string variable to be altered in the whileloop below

  // keep running until the rounCount is above numRounds:
  while (roundCount <= numRounds) {
    result = playRound(playerSelection(),computerPlay());
    
    // looks at the returned string of playRound(), 
    // if it includes the text "you win" increment playerScore, alter scoreboard and alert result + scoreboard.   
    // else if it includes the text "computer wins" increment computerScore, alter scoreboard and alert result + scoreboard.   
    // else the result must be a tie.
    if (result.includes("you win")) {
      playerScore++;
      scoreBoard = `\nRound ${roundCount} \nPlayer score = ${playerScore}\nComputer score = ${computerScore}`;
      alert(result+scoreBoard);
    } else if (result.includes("computer wins")) {
      computerScore++;
      scoreBoard = `\nRound ${roundCount} \nPlayer score = ${playerScore}\nComputer score = ${computerScore}`;
      alert(result+scoreBoard);
    } else {
      scoreBoard = `\nRound ${roundCount} \nPlayer score = ${playerScore}\nComputer score = ${computerScore}`;
      alert(result+scoreBoard)
    }
    
    roundCount++;
  }

  // determine the winner.
  if (playerScore>computerScore) {
    alert("You Win! :)"+scoreBoard)
  } else if (playerScore<computerScore) {
    alert("computer wins :'("+scoreBoard)
  } else {
    alert("its a tie! ¯\\_(ツ)_/¯"+scoreBoard)
  }

}
