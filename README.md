# Memory Game Project

Project number 3 belonging to the Udacity Front-End Web Developer Nano Degree

## How The Game Works

The game board consists of sixteen "cards" arranged in a grid. The deck is made of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!

Each turn:

The player flips one card over to reveal its underlying symbol.
The player then turns to a second card, trying to find the corresponding card with the same symbol.
If the cards match, both cards stay flipped over.
If the cards do not match, both cards are flipped face down.
The game ends once all cards have been correctly matched.

## Installation

You can clone or download in zip, once unzipped in a folder or cloned, run the file index.html in your favourite browser.

## External Dependencies:

**CSS files:**

https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css

https://fonts.googleapis.com/css?family=Coda

font-awesome.min.css is used for the icons that fill each of the cards, 8 pairs of icons, as well as a couple more for the representation of stars as a way to score the game.

Likewise, an external google source is used: Coda.

## JavaScrip Functions

**shuffle (array)**: From http://stackoverflow.com/a/2450976 suffle the cards in each new game. Retun an array with a new distribution of cards.

**newGame (cards)**: Display the cards on the page.

**startTime ()**: Implementation of the chronometer.

**listOfOpenCards (iconfa)**: add the click card to an array of "open" cards. It receives as a parameter the HTML of the icons that are clicked on. Return an array with the strings of the icon names. Array openCards.

**match (openCards)**: if the array openCards has two cards, check to see if the two cards match in that case they go to the match state. Returns matches number of times to couple of cards have matches.

**noMatch (openCards)**: if the array openCards and the cards do ot match, remove the cards from the array openCards and hide the card's symbols.

**moveCounter ()**: increment the move counter and display it on the page. Return counter - the move Counter.

**showStars (counter)**: Decrement the stars in function of the move counter. Return stars - number of final stars.

**finalMessage ()**: if all cards have matched, display a mess with the final score, moves, stars and time.

**reloaded ()**: restart the game and play again.

**displayCardSymbol ()**: if a card is clicked display the card, retrieve the HTML content of the card and call the rest of the functions. minus newGame (cards) and startTime ().
