document.querySelector('.containerH').style.display = 'flex';

const flags = ["🇸🇦","🇸🇦","🇦🇪","🇦🇪","🇰🇼","🇰🇼","🇧🇭","🇧🇭","🇶🇦","🇶🇦","🇴🇲","🇴🇲","🇯🇵","🇯🇵","🇫🇷","🇫🇷","🇺🇸","🇺🇸","🇬🇧","🇬🇧",
    "🇪🇬","🇪🇬","🇹🇷","🇹🇷","🇰🇷","🇰🇷","🇩🇪","🇩🇪","🇨🇦","🇨🇦"]


const shuffledFlag = flags.sort(() => Math.random() - 0.5);


const gameContainer = document.querySelector('.hgame');

let firstCard = null;
let secondCard = null;
let preventClick = false;

for (let i = 0; i < shuffledFlag.length; i++) {
    const card = document.createElement('div');
    card.className = 'item';
    card.textContent = shuffledFlag[i];

    card.addEventListener('click', () => {
        if (preventClick || card.classList.contains('flipCard')) return;

        card.classList.add('flipCard');

        if (!firstCard) {
            firstCard = card;
        } else {
            secondCard = card;
            preventClick = true;
        }

        if (firstCard && secondCard) {
            if (firstCard.textContent === secondCard.textContent) {
                firstCard = null;
                secondCard = null;
                preventClick = false;

                const allCards = document.querySelectorAll('.item');
                const flippedCards = document.querySelectorAll('.flipCard');

                if (flippedCards.length === allCards.length) {
                    clearInterval(timerInterval);
                    setTimeout(() => {
                        document.getElementById('winMessage').classList.add('show');

                        // Confetti animation
                        const duration = 15 * 1000,
                            animationEnd = Date.now() + duration,
                            defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

                        function randomInRange(min, max) {
                            return Math.random() * (max - min) + min;
                        }

                        const interval = setInterval(function () {
                            const timeLeft = animationEnd - Date.now();
                            if (timeLeft <= 0) return clearInterval(interval);

                            const particleCount = 50 * (timeLeft / duration);

                            confetti(Object.assign({}, defaults, {
                                particleCount,
                                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                            }));
                            confetti(Object.assign({}, defaults, {
                                particleCount,
                                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                            }));
                        }, 250);
                    }, 300);
                }
            } else {
                setTimeout(() => {
                    firstCard.classList.remove('flipCard');
                    secondCard.classList.remove('flipCard');
                    firstCard = null;
                    secondCard = null;
                    preventClick = false;
                }, 800);
            }
        }
    });

    gameContainer.appendChild(card);
}

// Timer logic
const totalTime = 240; // Longer time for hard level
let currentTime = totalTime;
const progressBar = document.getElementById('progressBar');

const timerInterval = setInterval(() => {
    currentTime--;
    const percent = (currentTime / totalTime) * 100;
    progressBar.style.width = percent + "%";

    if (currentTime === 0) {
        clearInterval(timerInterval);
        endGameMessage();
    }
}, 1000);

// Time's Up Message
function endGameMessage() {
    const messageBox = document.createElement('div');
    messageBox.className = 'lose-message';
    messageBox.innerHTML = `
        <h2>⏰ Time's Up!</h2>
        <p>Great effort! Want to try again?</p>
    `;

    document.body.appendChild(messageBox);
    setTimeout(() => {
        messageBox.classList.add('show');
    }, 300);
}
