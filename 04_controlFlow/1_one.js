// if statement

const isLoggedIn = true

if (isLoggedIn) {
    console.log("Logged In");
}


// without braces -

// if (3 < 9) console.log("True");              // for single statement

//       OR

// if (3 < 9) console.log("True"), console.log("3 is less than 9");                    // for multiple statements,       btw, it is not a good way




// conditionals :- 
// < : (2 < 5) => true
// > : (2 > 5) => false
// <= : (2 <= 5) => true
// >= : (2 >= 5) => false
// != : (2 != 5) => true
// == : (2 == "2") => true
// === : (2 === "2") => false
// !== : (2 !== "2") => true

const temperature = 41

// if statement

if (temperature < 50) {
    console.log("Less than 50");
}
console.log("Temperature is less than 50");

// if-else statement

if (temperature < 50) {
    console.log("Less than 50");
} else {
    console.log("More than 50");
}

// multiple else-if statement

const balance = 500

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

// nested if statement

let userLoggedIn = false
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
    userLoggedIn = true
    if (userLoggedIn && debitCard) {
        console.log("Allow to buy course");
    }
}

// Logical Operator -

// &&
// ||
// !