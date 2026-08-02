const clock = document.querySelector('#clock');

setInterval(function(){                // Used to run a function continuously after given milli-seconds
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)