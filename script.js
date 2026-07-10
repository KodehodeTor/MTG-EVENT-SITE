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

  // Show random numbers while rolling, runs code every 60 miliseconds. Giving the dice rolling animation.
  const animation = setInterval(() => {
    dice1.textContent = randomNumber();
    dice2.textContent = randomNumber();
  }, 60);

  // Stops the animation
  setTimeout(() => {
    clearInterval(animation);

    // Generate the roll
    const roll1 = randomNumber();
    const roll2 = randomNumber();
    // Changes rolls to text content
    dice1.textContent = roll1;
    dice2.textContent = roll2;
    // Shows the total of the roll
    total.textContent = `Total: ${roll1 + roll2}`;
    // Removes the animation class
    dice1.classList.remove("rolling");
    dice2.classList.remove("rolling");
  }, 800);
}

// Generate random number between 1 and 20 each time its called
function randomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}
