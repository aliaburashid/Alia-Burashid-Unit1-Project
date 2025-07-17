# Alia-Burashid-Unit1-Project

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
1. Visit the [deployed site link here]
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

## **Pseudocode**
```pseudocode
// On Game Start
Display level selection screen
When a level is selected:
    Load corresponding tile data
    Shuffle the tiles
    Render grid of tiles (face down)

// On Tile Click
If this is the first tile flipped:
    Store as firstSelection
    Reveal tile visually
Else if this is the second tile flipped:
    Store as secondSelection
    Reveal tile visually
    Disable further clicks temporarily

    If tiles match:
        Keep both tiles revealed
        Increment score or match count
    Else:
        Wait 1 second
        Flip both tiles back

    Reset selections

// Check for Win
If all tile pairs are matched:
    Display win screen/message
    Option to replay or change level
```
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

