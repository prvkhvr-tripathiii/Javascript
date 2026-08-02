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

