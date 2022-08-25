// Global selected node(s)
const board = document.querySelector('.board');

// Node(s) styling
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

// Global variable(s)
let isDown = false; // for control() and draw()
document.body.addEventListener('mousedown', () => {
    isDown = true;
});
document.body.addEventListener('mouseup', () => {
    isDown = false;
});

// Generate 16 x 16 grid of square divs
function createSquares () {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        board.appendChild(square);
        square.addEventListener('mouseover', draw);
        square.addEventListener('mousedown', draw);
    }
}

createSquares(); // Call to populate squares

// Get call when mouse moves over each square to change the color and give the drawing effect
function draw(e) {
    if (e.type === 'mouseover' && !isDown) {
        return;
    }
    else {
        e.target.style.backgroundColor = "grey";
    }
}