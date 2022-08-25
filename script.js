// Global selected node(s)
const board = document.querySelector('.board');
const selectSize = document.querySelector('.select-size');

// Global variable(s)
let isDown = false; // for control() and draw()
document.body.addEventListener('mousedown', () => {
    isDown = true;
});
document.body.addEventListener('mouseup', () => {
    isDown = false;
});

// Generate 16 x 16 grid of square divs
function createSquares (size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size * size); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        board.appendChild(square);
        square.addEventListener('mouseover', draw);
        square.addEventListener('mousedown', draw);
    }
}

createSquares(16); // Call to populate squares

// Get call when mouse moves over each square to change the color and give the drawing effect
function draw(e) {
    if (e.type === 'mouseover' && !isDown) {
        return;
    }
    else {
        e.target.style.backgroundColor = "black";
    }
}

// Change the size of the grid after new input to provide new draw board
selectSize.addEventListener('click', changeSize);
function changeSize() {
    removeSquares(board);
    size = prompt('Enter the new size from 1-100', '16');
    if (size === null) {
        createSquares(16);
    }
    else if (size > 100) {
        changeSize();
    }
    else {
        createSquares(size);
    }
}

// Remove all squares before creating the new board
function removeSquares(board) {
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}