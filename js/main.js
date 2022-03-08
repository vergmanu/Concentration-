/*----- constants -----*/
 const winCombos = [
     [0, 13],
     [1, 15],
     [2, 9],
     [3, 12],
     [4, 10],
     [5, 14],
     [6, 11],
     [7, 8],
 ]


/*----- app's state (variables) -----*/
//let board, winner


/*----- cached element references -----*/
const divEl = document.querySelector('div')

//const tbodyEl = document.querySelector('tbody')
//const buttonEl = document.querySelector('button')

/*----- event listeners -----*/
divEl.addEventListener('click', cardClicked)

//tbodyEl.addEventListener('click', handlePlayerClick)

// buttonEl.addEventListener('click', function(evt) {
//     init()
// })

/*----- functions -----*/
function cardClicked(evt) {
    const target = evt.currentTarget;
    target.className = target.className.replace('backside', '').trim();
}
// function init() {
//     board = [null, null, null, null, null, null, null, null, 
//             null, null, null, null, null, null, null, null,]
//     }
//     winner = null
//     render()
// }

// function render() {
//     if(winner) {
        
//     } 

//     board.forEach(function(square, idx) {
//         const tdEl = document.getElementById('sq' + idx)
//         if(square) {
//             tdEl.innerHTML = `<div style="background: ${ players[square] }"></div>`
//         } else {
//             tdEl.innerHTML = ''
//         }
//     })
// }

// function handlePlayerClick(evt) {
//     const idx = evt.target.id[2]
//     if(!board[idx] && !winner) {
//         board[idx] = turn
//         checkWin()
//         render()
//     }
// }

// function checkWin() {
//     winCombos.forEach(function(combo) {
//         if( Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === 3 ) {
//             winner = board[combo[0]]

//         }
//     })
// }



/*---- Runs the game -----*/
//init()