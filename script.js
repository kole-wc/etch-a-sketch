// Global selected node(s)
const board = document.querySelector('.board');

// Node(s) styling
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

// Global variable(s)
let isDown = false; // for control() and draw()

// Generate 16 x 16 grid of square divs
function createSquares () {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        board.appendChild(square);
        square.addEventListener('mouseover', draw);
    }
}

// Listen whether the mouse is up or down to determine the state of isDown for draw()
function control () {
    board.addEventListener('mousedown', () => {
        isDown = true;
    });
    
    board.addEventListener('mouseup', () => {
        isDown = false;
    });
}

// Get call when mouse moves over each square to change the color and give the drawing effect
function draw(e) {
    if (isDown) {
        e.target.style.backgroundColor = "grey";
    }
}

createSquares(); // Call to populate squares
control(); // Call to listen to mousedown event for drawing control