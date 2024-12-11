const moving = document.getElementById('moving');

const screenWidth = window.innerWidth
const divWidth = 50;

const speed = 2;

let moveRight = true;

function moveDiv() {
    
    const currentPositionX = parseInt(moving.style.left) || 0;

    if (currentPositionX < 0 || currentPositionX > screenWidth - divWidth) {
        moveRight = !moveRight;
    }

    const newPositionX = currentPositionX + (moveRight ? speed: -speed);
    moving.style.left = newPositionX + 'px';
}

const intervalId = setInterval(moveDiv, 0.001);