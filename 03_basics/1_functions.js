console.log("H");
console.log("I");
console.log("T");

// to execute these calls multiple times, we should create a function like....

function sayMyName() {                     // It's function declaration
    console.log("H");
    console.log("I");
    console.log("T");
}

sayMyName                     // It's a reference only, it can not execute function
sayMyName()                   // It's a function call

function addTwoNumbers(number1, number2) {                // here, the values in braces are called as parameters
    console.log(number1 + number2);
}

addTwoNumbers(3, 5);                // here, the values in braces are called as arguments

function loginUserMessage1 (username) {                 
    return `${username} just logged in`;
}

console.log(loginUserMessage1());                      // => undefined just logged in         to avoid this, we can put a if statement


function loginUserMessage2 (username) {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage2());                      // => Please enter a username
                                                      // => undefined          to avoid this, we can put a default value for parameters

function loginUserMessage3 (username  = "You") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage3());                      // => You just logged in
