let grid = document.querySelector('#grid')
grid.addEventListener('mouseover', fillSquare)
let quantity = 20
let salmon = '#fa8072'
createSquares(quantity)



function createSquares(quantity = 2) {
  quantity = parseInt(quantity)
  if (!quantity || quantity <= 1)
    quantity = 2
  else if (quantity > 100)
    quantity = 100
  let square
  let squareWidth = 100 / quantity + '%'
  for (let i = 0; i < quantity; i++) {
    for (let j = 0; j < quantity; j++) {
      square = document.createElement('div')
      square.style.width = squareWidth
      grid.appendChild(square)
    }
  }
}