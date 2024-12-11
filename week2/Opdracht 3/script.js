const moving = document.getElementById('moving');

const screenWidth = window.innerWidth

const divWidth = 50;

const speed = 1;

let moveRight = true;

function getRandomColor(){
    const letters = '0123456789ABCDEF';

    let color = '#';

    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function moveDiv() {
    
    const currentPositionX = parseInt(moving.style.left) || 0;

    if (currentPositionX < 0 || currentPositionX > screenWidth - divWidth) {
        moveRight = !moveRight;
    }

    const newPositionX = currentPositionX + (moveRight ? speed: -speed);
    moving.style.left = newPositionX + 'px';
}

moving.addEventListener('click', function(){
    moving.style.backgroundColor = getRandomColor();
});

const intervalId = setInterval(moveDiv, 0.001);