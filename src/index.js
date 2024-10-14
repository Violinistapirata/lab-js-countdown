const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector('#start-btn');

startButton.addEventListener('click', () => startCountdown())



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  
  // Your code goes here ...
  
  // Create a variable for the counter div
  const divRemainingTime = document.querySelector('#time');

  // Reset the counter
  remainingTime = DURATION;
  divRemainingTime.innerHTML = remainingTime;

  // Disable the start button
  startButton.disabled = true;

  // Timer interval function
  timer = setInterval(() => {

    // Update counter
    remainingTime--;
    divRemainingTime.innerHTML = remainingTime;

    // Stop condition
    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast('Take off!');
      startButton.disabled = false;
    };
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
