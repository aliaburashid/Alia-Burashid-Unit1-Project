# Alia-Burashid-Unit1-Project

<br>

# **Mix & Match: Brain Flip!**
## *Description*
A three level matching game that challenges players memory, focus, and vocabulary. There are 3 levels, each level increases in difficulty - `starting with image-to-image`, then `word-to-word`, and finally `image-to-word matches`. 

> Includes sound and accessibility features to enhance user experience.

<br>

## **How to Get Started**
1. Visit the [deployed site link here]
2. Select a difficulty level
3. Flip tiles to find matching pairs
4. Try to match all pairs with as few moves and as little time as possible!

## **Features**
* Three unique difficulty levels
* Keyboard navigation support
* Visual + sound feedback
* Probably a Confetti win animation

## **Technologies Used**
* HTML
* CSS (Grid & Flexbox)
* JavaScript (DOM, Arrays, Event Handling)

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

<br>

## **Trello Board**
> Click to view the [Trello Board](https://trello.com/invite/b/686f635c34610b048cbc9045/ATTI03b51c6fdbeab0e5167f4c098ef5810405EC98C4/alia-burashed-mix-and-match)
## **Future Enhancements**
* Custom themes
* Best Score saving 

