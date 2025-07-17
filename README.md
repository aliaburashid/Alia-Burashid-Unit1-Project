# Alia-Burashid

# **Flip & Learn : Mix and Match**

## **Description**
A fun and educational memory card game designed for kids! Players choose from exciting categories like `ABC letters`, `123 numbers`, `animals`, and `flags`. The game has `3 levels of difficulty` — the higher the level, the more cards to match. Each round helps improve memory, concentration, and pattern recognition in a playful way.

> Includes cheerful sound effects and visual feedback like animations to keep players engaged.
<br>

## **Game Objectives**
- Strengthen memory and focus through repeated image association
- Encourage children to think ahead and form memory strategies
- Provide a fun, playful experience that feels like learning through gameplay
<br>

## **How to Get Started**
1. Visit the [deployed site link here](https://flipandlearn.surge.sh)
2. Choose a category
3. Select a difficulty level
4. Flip the cards and try to match pairs before the timer runs out!

<br>

## **Features**
* Four engaging categories: **Letters**, **Numbers**, **Animals**, **Flags**
* Three difficulty levels: Easy (6 pairs), Medium (12 pairs), Hard (18 pairs)
* Sound feedback when clicking buttons or selecting levels
* Fun background visuals and interactive audio prompts
* Confetti animation when the player wins
* Responsive layout using Flexbox

<br> 

## **Accessibility Considerations**
- Clickable sound icon for audio hints
- Visual progress bar for time awareness
- High contrast between text and backgrounds
- Large clickable areas for smaller hands

 <br>

## **Technologies Used**
* HTML5
* CSS
* JavaScript

<br>

## 🧠 Memory Game Logic (Medium Level)

- When the game starts, the **Medium level board** becomes visible:
  ```javascript
  document.querySelector('.containerM').style.display = 'flex';
  ```

- A list of **16 cards (8 matching pairs)** is created and **shuffled**:
  ```javascript
  const letters = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H"];
  const shuffledLetters = letters.sort(() => Math.random() - 0.5);
  ```

- Each shuffled letter is rendered as a **card (`div`)** and added to the board.

---

## 🔄 Game Play Flow

- When a player **clicks a card**:
  - If it's the **first card**, we **store it**.
  - If it's the **second card**:
    - ✅ If it **matches** the first, both stay flipped.
    - ❌ If not, both **flip back after a few sec**.

- During this comparison, **clicking is disabled** using:
  ```javascript
  preventClick = true;
  ```

---

## ⏱ Timer Logic

- A **60-second countdown timer** runs and updates a **progress bar**:
  ```javascript
  const totalTime = 60;
  ```

- If the player matches **all pairs before time runs out**:
  - The timer stops.
  - A **"You Win"** message appears.
  - **Confetti animation** is triggered.

- If **time runs out first**:
  - A **"Time’s Up"** message is shown.

## 💾 How Category and Level Selection Works

When a user selects a **category** (like `animals`) and a **level** (like `easy`), we use `localStorage` to save that choice in the browser — kind of like writing it on a sticky note.

For example:
```javascript
localStorage.setItem('category', 'animals');
localStorage.setItem('level', 'easy');
```

Then, when the user goes to the **game page** (`cards.html`), we grab those saved values using:
```javascript
localStorage.getItem('category');
localStorage.getItem('level');
```

We use those to load the correct JavaScript file, like:
```javascript
js/easyanimals.js
```
— which contains all the logic and cards for that combination.

## **Wireframe**
> Click to view the [Wireframe](https://docs.google.com/document/d/1flJDGPS6NSvPXU3d418SveFGa79aLtH9sT6U-t2QPmo/edit?tab=t.0)
> 
## **Trello Board**
> Click to view the [Trello Board](https://trello.com/invite/b/686f635c34610b048cbc9045/ATTI03b51c6fdbeab0e5167f4c098ef5810405EC98C4/alia-burashed-mix-and-match)

## **References:**
1. Flaticon: (https://www.flaticon.com/search?word=sound%20icon&type=sticker)
2. Kids color palettee (https://coolors.co/palettes/trending/kids)
3. A child AI voice generator (https://artlist.io/voice-over/my-voiceovers)
4. W3Schools (https://www.w3schools.com/)
5. Game idea (https://www.helpfulgames.com/subjects/brain-training/memory.html)
6. Confeeti code (https://confetti.js.org/)
7. Bubbles code (https://particles.js.org/samples/presets/bubbles)

## **Future Enhancements**
* Custom themes - Let kids choose fun themes
* Progress tracking with badges or achievement milestones 
* Best Score saving 
* Improved mobile responsiveness
* Full audio narration for instructions and feedback
* Dark mode and accessibility options for colorblind users
* Multiplayer mode for competitive play
* background music once the game starts 

