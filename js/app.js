/*
 *  ************ Create a list that holds all of your cards ***********
 */

const cards = [
  'fa-pencil',
  'fa-folder-open-o',
  'fa-calendar',
  'fa-balance-scale',
  'fa-heartbeat',
  'fa-calendar',
  'fa-signal',
  'fa-university',
  'fa-pencil',
  'fa-pie-chart',
  'fa-signal',
  'fa-pie-chart',
  'fa-balance-scale',
  'fa-university',
  'fa-folder-open-o',
  'fa-heartbeat'
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

   /*
   *   - loop through each card and create its HTML
  */
  let card = "";
  let playingCards = "";
  for(let i = 0; i < cards.length; i++){
    card = `<li class="card"><i class="fa ${cards[i]}"></i></li>`;
    playingCards += card;
  }

   /*
   *   - add each card's HTML to the page
   */
  const deck = document.getElementById('deck');
  return deck.innerHTML = playingCards;
}

/*
    * - implementation of the chronometer
*/

function startTime(){
  let seconds = 0;
  sec = document.getElementById('seconds');
  min = document.getElementById('minutes');
  let cronometer = setInterval(function(){
    seconds++;

    let secs = seconds;
    let mins = 0;
    while(secs >= 60){
      mins++;
      secs -= 60;
    }

    if(mins < 10){
      min.innerHTML = `0${mins}`;
    }else{
      min.innerHTML = mins;
    }

    if(secs <10){
      sec.innerHTML = `0${secs}`;
    }else{
      sec.innerHTML = secs;
    }
  }, 1000);
}

/*
  *  - if the list already has another card, check to see if the two cards match
  *    + if the cards do match, lock the cards in the open position (put this
          functionality in another function that you call from this one)
*/
let matches = 0;
function match(openCards){
  if(openCards.length > 1 && openCards[0] === openCards[1]){
    matches += 1;
    for(let i = 0; i < gameCards.length; i++){
      if(gameCards[i].classList.contains("open")){
        gameCards[i].classList.remove("open", "show");
        gameCards[i].classList.add("match");
      }
    }
  }
  return matches;
}

/*
 *    + if the cards do not match, remove the cards from the list and hide the
      card's symbol (put this functionality in another function that you call
      from this one)
*/
function noMatch(openCards){
  if(openCards.length > 1 && openCards[0] !== openCards[1]){
    openCards = [];
    for(let i = 0; i < gameCards.length; i++){
      if(gameCards[i].classList.contains("open")){
        gameCards[i].classList.add("nomatch");
        const time = setTimeout(function removeCards(){
          gameCards[i].classList.remove("open", "show", "nomatch")
        }, 1000);
      }
    }
  }
}

/*
/*
*  - add the card to a *list* of "open" cards (put this functionality in another
    function that you call from this one)
*/
let openCards = [];
function listOfOpenCards(iconfa){
  if(openCards.length === 2){
    openCards = [];
  }
  icon = iconfa.slice(13, -6);
  openCards.push(icon);
  return openCards;
};

/*
*    + increment the move counter and display it on the page (put this functionality
      in another function that you call from this one)
*/
let counter = 0;
function moveCounter(){
  counter += 1;
  const moves = document.querySelector('.moves');
  moves.innerText = counter;
  return counter;
};

let stars = 3;
function showStarts(counter){
  if(counter === 16){
    const thirdStar = document.getElementById('third-star');
    thirdStar.classList.remove("fa-star");
    thirdStar.classList.add("fa-star-o");
    stars -= 1;
  }
  if(counter === 26){
    const secondStar = document.getElementById('second-star');
    secondStar.classList.remove("fa-star");
    secondStar.classList.add("fa-star-o");
    stars -= 1;
  }
  if(counter === 34){
    const firstStar = document.getElementById('first-star');
    firstStar.classList.remove("fa-star");
    firstStar.classList.add("fa-star-o");
    stars -= 1;
  }
  return stars;
}

/*
 *    + if all cards have matched, display a message with the final score (put
      this functionality in another function that you call from this one)
 */

function finalMessage(){
  if(matches === 8){
    const message = setTimeout(function(){
      const modal = document.getElementById('modal');
      modal.classList.remove("hidden");
      const move = document.getElementById('moves');
      move.innerText = counter;
      const star = document.getElementById('stars');
      star.innerText = stars;

      const minutes = document.getElementById('minutes');
      timeMinutes = minutes.innerText;
      const finalMinutes = document.getElementById('finalMinutes');
      finalMinutes.innerText = timeMinutes;
      const seconds = document.getElementById('seconds');
      timeSeconds = seconds.innerText;
      const finalSeconds = document.getElementById('finalSeconds');
      finalSeconds.innerText = timeSeconds;

    }, 600);
  }
};

/*
* restart the game  and play again.
*/

function reloaded(){
  window.location.reload(true);
}

newGame(cards);
startTime();

/*
 *  ****** set up the event listener for a card. If a card is clicked: ******
 *  - display the card's symbol (put this functionality in another function
      that you call from this one)
*/

const gameCards = document.getElementsByClassName('card');

for(let i = 0; i < gameCards.length; i++){
  gameCards[i].addEventListener('click', function displayCardSymbol(){
    gameCards[i].classList.add("open", "show");
    const iconfa = gameCards[i].innerHTML;
    listOfOpenCards(iconfa);
    match(openCards);
    noMatch(openCards);
    showStarts(counter);
    finalMessage();

  });

  gameCards[i].addEventListener('click', moveCounter);

}


const reload = document.querySelector('.restart');
reload.addEventListener('click', reloaded);

const play = document.getElementById('playAgain');
play.addEventListener('click', reloaded);
