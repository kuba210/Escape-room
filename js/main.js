// Set the initial time in seconds (5 minutes)
let timeLeft = 5 * 60;
const timerElement = document.getElementById("timer");



function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;



    // Display the remaining time in the format "MM:SS"
    timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;



    if (timeLeft === 0) {
        // When the timer reaches 0, refresh the page
        location.reload();
    } else {
        // Continue counting down
        timeLeft--;
        setTimeout(updateTimer, 1000); // Update the timer every 1 second
    }
}
        // Start the countdown when the page loads
        updateTimer();