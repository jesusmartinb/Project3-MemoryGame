/**
 * @description  Create a list or array that holds all of your cards
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



/**
// Shuffle function from http://stackoverflow.com/a/2450976
* @description shuffle the elements of an array
* @param {array} cards - the cards of the gameCards
* @return {array} cards - the cards suffle
*/
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



/**
 * @description Display the cards on the page
 * @param {array} cards - the cards of the gameCards
 * @returns {HTML} playingCards - HTML of cards
*/
function newGame(cards){
  // shuffle the list of cards using the provided "shuffle" method below
  shuffle(cards);

  //loop through each card and create its HTML
  let card = "";
  let playingCards = "";
  for(let i = 0; i < cards.length; i++){
    card = `<li class="card"><i class="fa ${cards[i]}"></i></li>`;
    playingCards += card;
  }

  //add each card's HTML to the page
  const deck = document.getElementById('deck');
  return deck.innerHTML = playingCards;
}



/**
* @description Implementation of the chronometer
*/
let cronometer;
function startTime(){
  let seconds = 0;
  sec = document.getElementById('seconds');
  min = document.getElementById('minutes');

  // every 1000ms adds a second
  cronometer = setInterval(function(){
    seconds++;

    // convert seconds into minutes and seconds
    let secs = seconds;
    let mins = 0;
    while(secs >= 60){
      mins++;
      secs -= 60;
    }

    // if the minutes or seconds have a single figure put a zero in front and
    // add the HTML to the page

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



/**
* @description add the click card to a list or array of "open" cards
* @param {HTML} iconfa - HTML of icons
* @returns {array} openCards - whith the strings of name icons
*/
let openCards = [];
function listOfOpenCards(iconfa){

  // if there are two icons yet in the array delete it
  if(openCards.length === 2){
    openCards = [];
  }

  // retrieves the name of the icon and adds it to the list
  icon = iconfa.slice(13, -6);
  openCards.push(icon);
  return openCards;
};



/**
* @description if the list openCards has two card, check to see if the two cards match
* @param {array} openCards - list of recent open Cards
* @return {number} matches - number of times a couple of cards have matches
*/
let matches = 0;
function match(openCards){

  //if the cards do match, add 1 to matches and lock the cards in the open position
  if(openCards.length > 1 && openCards[0] === openCards[1]){
    matches += 1;
    // for all de cards check de open ones and change them to match
    for(let i = 0; i < gameCards.length; i++){
      if(gameCards[i].classList.contains("open")){
        gameCards[i].classList.remove("open", "show");
        gameCards[i].classList.add("match");
      }
    }
  }
  return matches;
};



/**
* @description if the cards do not match, remove the cards from the list and hide the
*  card's symbol
* @param {array} openCards - list of recent open Cards
*/
function noMatch(openCards){
  if(openCards.length > 1 && openCards[0] !== openCards[1]){
    openCards = [];

    // for all the cards check de open ones and add class nomatch
    for(let i = 0; i < gameCards.length; i++){
      if(gameCards[i].classList.contains("open")){
        gameCards[i].classList.add("nomatch");

        // give a time for the nomatch animation and hide the cards symbol
        const time = setTimeout(function removeCards(){
          gameCards[i].classList.remove("open", "show", "nomatch", "avoid-clicks")
        }, 1000);
      }
    }
  }
};



/**
* @description increment the move counter and display it on the page
+ @returns {number} counter - move counter
*/
let counter = 0;
function moveCounter(){
  counter += 1;

  // display de counter value in the page
  const moves = document.querySelector('.moves');
  moves.innerText = counter;
  return counter;
};



/**
* @description decrement the stars in function of move counter
* @param {number} counter - move counter
+ @returns {number} stars - number of final stars
*/
let stars = 3;
function showStars(counter){

  // when the movements reach 22 a star is decremented and its symbol is changed
  if(counter === 22){
    const thirdStar = document.getElementById('third-star');
    thirdStar.classList.remove("fa-star");
    thirdStar.classList.add("fa-star-o");
    stars -= 1;
  }
  // when the movements reach 32 a star is decremented and its symbol is changed
  if(counter === 32){
    const secondStar = document.getElementById('second-star');
    secondStar.classList.remove("fa-star");
    secondStar.classList.add("fa-star-o");
    stars -= 1;
  }
  return stars;
};



/**
* @description if all cards have matched, display a message with the final score
 */
function finalMessage(){
  if(matches === 8){

    // stop chronometer
    clearInterval(cronometer);

    // give a time for final match animation
    const message = setTimeout(function(){

      // display final message, moves and stars
      const modal = document.getElementById('modal');
      modal.classList.remove("hidden");
      const move = document.getElementById('moves');
      move.innerText = counter;
      const star = document.getElementById('stars');
      star.innerText = stars;

      // shows final time after retrieving it from the score-panel
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



/**
* @description restart the game  and play again reloading de page
*/
function reloaded(){
  window.location.reload(true);
};



// ***** START OF THE GAME *****/
newGame(cards);
startTime();


//  set up the event listener for all cards. If a card is clicked display the card

const gameCards = document.getElementsByClassName('card');

for(let i = 0; i < gameCards.length; i++){
  gameCards[i].addEventListener('click', function displayCardSymbol(){
    gameCards[i].classList.add("open", "show", "avoid-clicks");

    // retrieve the content of the card
    const iconfa = gameCards[i].innerHTML;


    listOfOpenCards(iconfa);
    match(openCards);
    noMatch(openCards);
    showStars(counter);
    finalMessage();

  });
  // set up the event listener for move counter
  gameCards[i].addEventListener('click', moveCounter);

}

// set up de event listeners for restart and play again
const reload = document.querySelector('.restart');
reload.addEventListener('click', reloaded);

const play = document.getElementById('playAgain');
play.addEventListener('click', reloaded);
