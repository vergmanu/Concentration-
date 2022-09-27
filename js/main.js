const cardColor = [
    'pink',
    'rust',
    'blue',
    'green',
    'yellow',
    'teal',
    'orange',
    'purple',
    'pink',
    'rust',
    'blue',
    'green',
    'yellow',
    'teal',
    'orange',
    'purple',
]

let playerAttempts = 8;

const h2El = document.querySelector('h2');
const h3El = document.querySelector('h3'); 
const cards = document.querySelectorAll('.square');

for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', flipCards)
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
        
    return array;
}

function randColor() {
    let randArr = shuffle(cardColor)
    for (let i = 0; i < randArr.length; i++){
        cards[i].classList.add(cardColor[i],)
        setTimeout(() => cards[i].classList.add('backside'), 800)
    }
}
randColor()


function flipCards (evt) {
    target = evt.currentTarget;
    target.classList.toggle('backside');
    checkCards(evt);
    gameOver(evt);
}

function checkCards(evt) {
    let cardOne = evt.currentTarget;
    cardOne.classList.add('flipped');
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


  