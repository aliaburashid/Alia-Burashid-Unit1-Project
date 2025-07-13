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

        // Loop over each letter to create a card (div)
         for (let i = 0; i < shuffledLetters.length; i++) {
            // Create a new (div)const for card box 
            const card = document.createElement('div');
            
            card.className = 'item'; // gives the card a class item to style 
            
            card.textContent = shuffledLetters[i]; // places a letter inise the card 

            card.addEventListener('click', () => {
                card.classList.toggle('flipCard'); // Flip card on click
            });

            gameContainer.appendChild(card); // adds the created card into the board
    }

