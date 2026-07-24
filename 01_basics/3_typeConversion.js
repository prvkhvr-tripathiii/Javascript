// Conversion


// String to Number

let score = "33abc"
console.log (typeof score)  // => string
let valueInNumber = Number(score)
console.log (typeof valueInNumber)  // => number
console.log (valueInNumber)  // => NaN (Not a Number)

// Boolean to Number

let isLoggedIn = true
let inNumberIsLoggedIn = Number(isLoggedIn)
console.log(inNumberIsLoggedIn)  // => 1
console.log(typeof inNumberIsLoggedIn) // => number

// null to Number 

let score = null
let nullToNumber = Number(null)
console.log(nullToNumber)  // => 0

// undefined to Number

let a;
let b = Number(a)
console.log(b)  // => NaN

// String to Boolean

let isLoggedIn = "Prakhar"
let booleanIsLoggedIn = Boolean(isLoggedIn)  
console.log(booleanIsLoggedIn)  // => true


let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)  
console.log(booleanIsLoggedIn)  // => false

// Other functions :-

String()    // used to convert to string
Boolean()     // used to convert to boolean




// Operations



let val = 10
let negVal = -val

console.log(negVal)  // => -10

console.log(10 + 20);  // => 30
console.log(10 - 20);  // => -10
console.log(10 * 20);  // => 200
console.log(10 / 20);  // => 0.5
console.log(10 ** 2);  // => 100
console.log(10 % 20);  // => 10


console.log("Prakhar " + "Tripathi");  // => Praakhar Tripathi

console.log("10" + 20);  // => 1020
console.log(10 + "20");  // => 1020
console.log("10" + 20 + 30);  // => 102030
console.log(10 + "20" + 30);  // => 102030
console.log(10 + 20 + "30");  // => 3030






console.log(+true);  // => 1
// console.log(true+);  // will generate error
console.log(+"");  // => 0