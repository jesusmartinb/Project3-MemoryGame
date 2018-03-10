/*
 *  ************ Create a list that holds all of your cards ***********
 */

const cards = [
  'fa-diamond',
  'fa-paper-plane-o',
  'fa-anchor',
  'fa-bolt',
  'fa-cube',
  'fa-anchor',
  'fa-leaf',
  'fa-bicycle',
  'fa-diamond',
  'fa-bomb',
  'fa-leaf',
  'fa-bomb',
  'fa-bolt',
  'fa-bicycle',
  'fa-paper-plane-o',
  'fa-cube'
];

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function newGame(cards){
  /*
   * ********* Display the cards on the page ****************
   *   - shuffle the list of cards using the provided "shuffle" method below
  */
  shuffle(cards);
  console.log(cards);
   /*
   *   - loop through each card and create its HTML
  */
  let card = "";
  let playingCards = "";
  for(let i = 0; i < cards.length; i++){
    card = `<li class="card"><i class="fa ${cards[i]}"></i></li>`;
    playingCards += card;
  }
  console.log(playingCards);
   /*
   *   - add each card's HTML to the page
   */
  const deck = document.getElementById('deck');
  console.log(deck);
  return deck.innerHTML = playingCards;
}

newGame(cards);

/*
*  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
*/
let openCards = [];
function listOfOpenCards(iconfa){
  console.log(iconfa);
  icon = iconfa.slice(13, -6);
  console.log(icon);
  openCards.push(icon);
  console.log(openCards);
  return openCards;
};

/*
 *  *********** set up the event listener for a card. If a card is clicked: ******************
 *  - display the card's symbol (put this functionality in another function that you call from this one)
*/

const gameCards = document.getElementsByClassName('card');

for(let i = 0; i < gameCards.length; i++){
  gameCards[i].addEventListener('click', function displayCardSymbol(){
    gameCards[i].classList.add("open", "show");
    const iconfa = gameCards[i].innerHTML;
    listOfOpenCards(iconfa);



  });
}


/*
    *  - if the list already has another card, check to see if the two cards match
    *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
*/


/*
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
*/

 /*
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
