let grid = document.querySelector('#grid')
grid.addEventListener('mouseover', fillSquare)
let newGridBtn = document.querySelector('#new-grid')
newGridBtn.onclick = newGrid
let salmon = 'rgba(250, 128, 115, .2)'
createSquares(10)

function newGrid() {
  let quantity = getQuantity()
  removeAllChildNodes(grid)
  createSquares(quantity)
}

function getQuantity() {
  let quantity = prompt('Quantity: ', 2)
  quantity = parseInt(quantity)
  return quantity
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function fillSquare(event = new Event()) {
  if (event.target.id == 'grid')
    return
  let color = event.target.style.backgroundColor
  console.log(color)
  event.target.style.backgroundColor = increaseOpacity(color)
}

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
      square.style.backgroundColor = salmon
      grid.appendChild(square)
    }
  }
}