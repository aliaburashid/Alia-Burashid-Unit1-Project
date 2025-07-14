function selectCategory(element) {
    // Remove 'selected' from all
    document.querySelectorAll('.container').forEach(c => {
        c.classList.remove('selected');
    });

    // Add to clicked container
    element.classList.add('selected');

    // Show the levels section
    document.querySelector('.levels').style.display = 'block';
}


// cards.html
// define the card values
const letters = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H"]

// commonly used trick to shuffle an array randomly 
// Math.random gives a range between 0-1 do 0.5 is neutral 
// .sort() compares each pair of items: + swap, -keep, 0 nothing 
const shuffledLetters = letters.sort(() => Math.random() - 0.5);

// find the class game and save it as the const varaiable so you can put cards inside later 
const gameContainer = document.querySelector('.game');

// reset the selection after comparing the cards, so the next ones can be stored again 
// If you don’t reset them, the program would keep comparing the same old cards
let firstCard = null;
let secondCard = null;
// click is back to interactive after waiting for a comparisonn 
let preventClick = false;

// Loop over each letter to create a card (div)
for (let i = 0; i < shuffledLetters.length; i++) {
    // Create a new (div)const for card box 
    const card = document.createElement('div');

    card.className = 'item'; // gives the card a class item to style 

    card.textContent = shuffledLetters[i]; // places a letter inise the card 

    card.addEventListener('click', () => {
        // If not clickable or already flipped, ignore click
        if (preventClick || card.classList.contains('flipCard')) return;

        card.classList.toggle('flipCard'); // Flip card on click

        //  if its empty (meaning no card is stored) then save the card clicked as firstCard
        // else, if we akready have a first card then save it as secondCard and prevent clicks untill comparison 
        if (!firstCard) {
            firstCard = card;
        } else {
            secondCard = card;
            preventClick = true;
        }

        // checks if the letters inside both cards are the same 
        if (firstCard.textContent === secondCard.textContent) {
            // If match found then keep both cards flipped 
            // set variables to null for new selectors and make cards clickable
            firstCard = null;
            secondCard = null;
            preventClick = false;

            // check for win 
            // gets all the cards on the board 
            const allCards = document.querySelectorAll('.item');
            // gets only the cards that are flipped 
            const flippedCards = document.querySelectorAll('.flipCard');

            // checks if all cards are flipped using .length if yes, then all matches are found 
            if (flippedCards.length === allCards.length) {
                setTimeout(() => {
                    document.getElementById('winMessage').classList.add('show'); // shows the message by adding a .show class to a hidden pop up 

                    // confetti logic copied directly from tsParticles website 
                    const duration = 15 * 1000,
                        animationEnd = Date.now() + duration,
                        defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

                    function randomInRange(min, max) {
                        return Math.random() * (max - min) + min;
                    }

                    const interval = setInterval(function () {
                        const timeLeft = animationEnd - Date.now();


                        if (timeLeft <= 0) {
                            return clearInterval(interval);
                        }

                        const particleCount = 50 * (timeLeft / duration);

                        // since particles fall down, start a bit higher than random
                        confetti(
                            Object.assign({}, defaults, {
                                particleCount,
                                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                            })
                        );
                        confetti(
                            Object.assign({}, defaults, {
                                particleCount,
                                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                            })
                        );
                    }, 250);

                }, 300);
            }

        } else {
            // if the cards dont match, flip back after short delay 
            setTimeout(() => {
                // flip crads back by removing the class
                firstCard.classList.remove('flipCard');
                secondCard.classList.remove('flipCard');
                firstCard = null;
                secondCard = null;
                preventClick = false;
            }, 800); // 0.8 seconds
        }
    });

    gameContainer.appendChild(card); // adds the created card into the board
}


// timer logic setup 

// set the time. ex: 120 seconds = 2 minutes
const totalTime = 10;
let currentTime = totalTime; // keeps track of the countdwown
const progressBar = document.getElementById('progressBar'); // to update the width as the time passes 

// starts the countdown (it runs every second)
const timerInterval = setInterval(() => {
    currentTime--; // reduces time by 1 sec

    // It calculates how much time is left in percent
    // then it changes the bar's width to match 
    const percent = (currentTime / totalTime) * 100;
    progressBar.style.width = percent + "%";

    // when the time runs out 
    if (currentTime === 0) {
        clearInterval(timerInterval); // stop the timer
        endGameMessage(); // show message
    }
}, 1000);

// Show friendly "You lose" message
function endGameMessage() {

    const messageBox = document.createElement('div');
    messageBox.className = 'lose-message';
    messageBox.innerHTML = `
    <h2>⏰ Time's Up!</h2>
    <p>Great effort! Want to try again?</p>
  `;
  
    document.body.appendChild(messageBox);

    // Trigger .show after tiny delay so animation runs
  setTimeout(() => {
    messageBox.classList.add('show');
  }, 300); 
}

