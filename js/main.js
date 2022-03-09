/*----- constants -----*/
//  const winCombos = [
//      [0, 13],
//      [1, 15],
//      [2, 9],
//      [3, 12],
//      [4, 10],
//      [5, 14],
//      [6, 11],
//      [7, 8],
//  ]


/*----- app's state (variables) -----*/
let board, cardOne, winner


/*----- cached element references -----*/
//const divEl = document.querySelector('div')
const buttonEl = document.querySelector('button')

/*----- event listeners -----*/
buttonEl.addEventListener('click', function(evt) {
    init()
})

/*----- functions -----*/
function shuffle (squaresArray) {
    let currentIndex = squaresArray.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [squaresArray[currentIndex], squaresArray[randomIndex]] = [
            squaresArray[randomIndex], squaresArray[currentIndex]];
    }
    return squaresArray;
}
let squares = ['pink', 'rust', 'blue', 'green',
                'yellow', 'teal', 'orange', 'purple',
                'pink', 'rust', 'blue', 'green',
                'yellow', 'teal', 'orange', 'purple'];
shuffle(squares);
console.log(squares);

function cardClicked(evt) {
    // clickedCombos.push(evt.target.id)
    // console.log(clickedCombos)
const target = evt.currentTarget;
target.classList.toggle('backside');
    checkCards(evt); 
    //target.className = target.className.replace('backside', '');
}

    const checkCards = (evt) => {
    const cardOne = evt.target;
    cardOne.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped');
    if(flippedCards.length === 2){
        if(
        flippedCards[0].getAttribute("name") === 
        flippedCards[1].getAttribute("name")
        ){
        console.log("match");
        flippedCards.forEach(card => {
            card.classList.remove("flipped");
            card.getElementsByClassName.pointerEvents = "none";
    } else {
        console.log ("wrong");
        flippedCards.forEach(card => {
            card.classList.remove("flipped");
        })
        }
    }
};






//function init() {
    // board = [null, null, null, null, 
    //          null, null, null, null, 
    //          null, null, null, null, 
    //          null, null, null, null]
//     cardOne = []
//     winner = null
//     render()
// }

//set conditional if no check1 then evt.currentTarget saves element to check1 (toggles to backside)
// function render () {
//     if(clickedCombos.length === 2) {
//         checkWin()
//     }

    
    //if there is one check then current target vs clicked is checked
    //if match take out
    //if don't toggle back
    
    
// function checkWinner() {
//         winCombos.forEach((set) => {
// function checkWin() {
//     winCombos.forEach(function(combo) {
//         if( Math.abs(board[combo[0]] + board[combo[1]] === 2 ) {
//             winner = board[combo[0]]
//         }  
//     })
// }



/*---- Runs the game -----*/
// init()