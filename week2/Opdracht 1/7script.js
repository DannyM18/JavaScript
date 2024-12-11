function moveDiv() {

    const movingDiv = document.getElementById('moving')
    const currentpostition = parseInt(moving.style.left) || 0;
    const newposition = currentpostition + 1;
    moving.style.left = newposition + 'px';
    const screenWidth = window.innerWidth;

    if (newposition + 50 > screenWidth) {
        clearInterval(intervalID)
    }
}

const intervalID= setInterval(moveDiv, 1)