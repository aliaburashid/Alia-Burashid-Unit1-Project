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
                } else  {
                    secondCard= card;
                    preventClick = true;
                }

                // checks if the letters inside both cards are the same 
                if (firstCard.textContent === secondCard.textContent) {
                    // If match found then keep both cards flipped 
                    // set variables to null for new selectors and make cards clickable
                    firstCard = null;
                    secondCard = null;
                    preventClick = false;
                } else {
                    // if the cards dont match, flip back after short delay 
                     setTimeout(() => {
                        // flip crads back by removing the class
                        firstCard.classList.remove('flipCard');
                        secondCard.classList.remove('flipCard');
                        firstCard = null;
                        secondCard = null;
                        preventClick= false;
                    }, 800); // 0.8 seconds
                }
            });

            gameContainer.appendChild(card); // adds the created card into the board
    }

