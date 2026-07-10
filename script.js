//  DICE ROLLER:

// Constant reference variables:

const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const button = document.getElementById("roll-btn");
const total = document.getElementById("total");

// Event listener for next function
button.addEventListener("click", rollDice);

// Function for the dice roller 
function rollDice() {
    //Animation classes
  dice1.classList.add("rolling");
  dice2.classList.add("rolling");