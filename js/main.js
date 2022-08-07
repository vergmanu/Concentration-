const h2El = document.querySelector('h2');
const h3El = document.querySelector('h3'); 
let playerAttempts = 5;

let cards = document.querySelectorAll('.square');
for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', flipCards)
}

function flipCards (evt) {
    target = evt.currentTarget;
    target.classList.toggle('backside');
    checkCards(evt);
    gameOver(evt);
}

function checkCards(evt) {
    let cardOne = evt.currentTarget;
    cardOne.classList.add("flipped");
    let flippedCards = document.querySelectorAll('.flipped');
    if (flippedCards.length === 2) {
    if (flippedCards[0].classList[1] === flippedCards[1].classList[1]) {
            h3El.textContent = "You found a match!";
            flippedCards.forEach(card => {
            card.classList.replace('flipped', 'matched')
        }) 
    } else {
            h3El.textContent = "Try again!";
            flippedCards.forEach(card => {
            card.classList.remove("flipped")
            setTimeout(() => card.classList.add('backside'), 500)
            })
            playerAttempts--;
            h2El.textContent = "Attempts left: " + playerAttempts; 
        }
}}

function gameOver(evt) {        
    let matchedCards = document.querySelectorAll('.matched');
    if (matchedCards.length === 16) {
        h2El.textContent = "YOU WIN!";
        h3El.textContent = ""; 
        noClick()
    } else if (playerAttempts <= 0) {
        h2El.textContent ="SORRY! GAME OVER. ";
        h3El.textContent = "";
       noClick()
    }
}

function noClick() {
    for (let i = 0; i < cards.length; i++){
        cards[i].removeEventListener('click', flipCards)
    }
}

