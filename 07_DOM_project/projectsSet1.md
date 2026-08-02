# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Findex.html)

# Solution Code

# Color Changer

## Project 1 Solution

```javaScript

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target.id);
        if (e.target.id === 'peachpuff') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'lavenderblush') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'darkgray') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'cornflowerblue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'aquamarine') {
            body.style.backgroundColor = e.target.id;
        }
    })
})
 
```



# BMI Calculator

## Project 2 Solution

```javaScript

const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const warning = document.querySelector('#warning')
    const container = document.querySelector('.container')

    results.style.color = 'rgb(241, 241, 241)';

    if (height === ' ' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
        results.style.color = 'Red';
    } else if (weight === ' ' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
        results.style.color = 'Red';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `Your BMI is <span>${bmi}</span>`
        if (bmi > 30) {
            warning.innerHTML = 'You are a person with obesity.'
            container.style.backgroundColor = "Red";
        } else if (bmi > 25) {
            warning.innerHTML = 'You are overweight.'
            container.style.backgroundColor = "Orange";
        } else if (bmi > 20) {
            warning.innerHTML = 'You are fit.'
            container.style.backgroundColor = "Green";
        } else {
            warning.innerHTML = 'You are underweight.'
            container.style.backgroundColor = "Orange";
        }
    }
})

```



# Digital Clock

## Project 3 Solution

```javaScript

const clock = document.querySelector('#clock');

setInterval(function(){                // Used to run a function continuously after given milli-seconds
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

```



# Guess the number Game

## Project 4 Solution

```javaScript

let randomNumber = parseInt((Math.random() * 100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessesSlot = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let remaining = 10; 
let numGuesses = 0;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        remaining--;
        // const remaining = parseInt(remainingGuesses.value);
        validateGuess(guess);
    })
}

function validateGuess (guess) {
    // To validate the input value if it fall between the correct range
    if (isNaN(guess)) {
        userInput.value = '';
        alert ("Please enter a valid number.");
    } else if (guess < 1) {
        userInput.value = '';
        alert ("Please enter a value from 1 to 100.");
    } else if (guess > 100) {
        userInput.value = '';
        alert ("Please enter a value from 1 to 100.")
    } else {
        prevGuesses.push(guess);
        if (remaining === 0) {
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess (guess) {
    // To check if the input value is same as generated value
    if (guess === randomNumber) {
        displayMessage(`Your guess ${guess} was right.`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Your guess ${guess} is TOOO Low`);
    } else {
        displayMessage(`Your guess ${guess} is TOOO High`);
    }
}

function displayGuess (guess) {
    // To display if the user win or not and clean the input box
    userInput.value = '';
    guessesSlot.innerHTML += `${guess}, `;
    numGuesses++;
    remainingGuesses.innerHTML = `${10 - numGuesses}`;
}

function displayMessage (message) {
    // To tell the user if the value is lower or greater than the generated value
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame () {
    userInput.value = '';
    userInput.setAttribute('disabled', "");
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame" style="background-color: Orange; font-family: sans-serif; display: inline-flex; justify-content: center; align-items: center; font-size: 20px; border-style: none; color: White; width: 200px; height: 50px; border-radius: 10px; cursor: pointer;">Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame () {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt((Math.random() * 100 + 1));
        prevGuesses = [];
        numGuesses = 0;
        guessesSlot.innerHTML = '';
        remainingGuesses.innerHTML = `${10 - numGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
}

```



# Keyboard Press

## Project 5 Solution

```javaScript

const insert = document.querySelector('#insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class = color> 
            <table>
                <tr>
                  <th>Key</th>
                  <th>Keycode</th>
                  <th>Code</th>
                </tr>
                <tr>
                  <td>${e.key === " " ? "Space" : e.key}</td>
                  <td>${e.keyCode}</td>
                  <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `
})

```




# Unlimited Color

## Project 6 Solution

```javaScript

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

```