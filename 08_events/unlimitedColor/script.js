const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

const body = document.querySelector('body');

const randomColor = function() {
    const hex = '0123456789ABCDEF'
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[parseInt(Math.random() * 16)];
    }
    return color;
}

function changeBgColor () {
    body.style.backgroundColor = randomColor();
}

let intervalId;

const startChangingColor = function () {
    if (!intervalId) {
        console.log("STARTED");
        intervalId = setInterval(changeBgColor, 1000)
    }
}

start.addEventListener('click', startChangingColor);

stop.addEventListener('click', function () {
    if (intervalId) {
        console.log("STOPPED");
        clearInterval(intervalId);
        intervalId = null;
    }
})