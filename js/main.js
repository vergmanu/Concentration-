/*----- constants -----*/


/*----- app's state (variables) -----*/
let board, winner


/*----- cached element references -----*/
const buttonEl = document.querySelector('button')
const cards = document.querySelectorAll('.square')
const h2El = document.querySelector('h2')
const divEl = document.getElementById('div')

/*----- event listeners -----*/
buttonEl.addEventListener('click', function(evt) {
    init()
})

/*----- functions -----*/
function init() {
    render()
}

function render() {

}

// function shuffle (randomArr) {
//     let currentIndex =randomArr.length, randomIndex;
//     while (currentIndex != 0) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;
//         [randomArr[currentIndex], randomArr[randomIndex]] = [
//             randomArr[randomIndex], randomArr[currentIndex]];
//     }
//     return randomArr;
// }
// let squares = ['pink', 'rust', 'blue', 'green',
//                 'yellow', 'teal', 'orange', 'purple',
//                 'pink', 'rust', 'blue', 'green',
//                 'yellow', 'teal', 'orange', 'purple'];
// shuffle(squares);

function cardClicked(evt) {
    const target = evt.currentTarget;
    target.classList.toggle('backside');
    checkCards(evt); 
    gameOver();
}

function checkCards(evt) {
    const cardOne = evt.currentTarget;
    cardOne.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped');
    console.log(flippedCards);
    if (flippedCards.length === 2) {
        if (flippedCards[0].classList[1] === flippedCards[1].classList[1]) {
            h2El.textContent = "You found a match!"
            //removeFlipped()
            flippedCards.forEach(card => {
            card.classList.replace('flipped', 'matched')
                //card.classList.remove("flipped")
            //can't click on card anymore
            //card.getElementsByClassName.pointerEvents = "none"
            }) 
        } 
        else {
            h2El.textContent = "Try again!"
            //removeFlipped()
            flippedCards.forEach(card => {
                //card.classList.replace('flipped', '')
                card.classList.remove("flipped")
                setTimeout(() => card.classList.add('backside'), 500)
                })
        }
}}

function gameOver(evt) {
    const matchedCards = document.querySelectorAll('.matched');
    console.log(matchedCards);
    if (matchedCards.length === 16) {
        h2El.textContent = "YOU WIN!" 
        //resetGame()
    }
}

// function checkMatch() {
// }

// function removeFlipped() {
//     flippedCards.forEach(card => {
//         card.classList.remove("flipped")})
// }

/*---- Runs the game -----*/
init()