// ++++++++++++++++++    Numbers     ++++++++++++++++++++ \\

const score = 400
console.log(score);                                  // => 400

const balance = new Number(400)
console.log(balance);                                // => [Number: 400]
console.log(balance.toString().length);              // => 3


const price = 123.1244
console.log(price.toFixed(2));                       // => 123.12
console.log(price.toPrecision(4));                   // => 123.1

const hundreds = 100000000
console.log(hundreds.toLocaleString());              // => 100,000,000
console.log(hundreds.toLocaleString('en-IN'));       // => 10,00,00,000

// ++++++++++++++++++    Maths     ++++++++++++++++++++ \\

console.log(Math);
console.log(Math.abs(-4));                              // => 4

console.log(Math.round(9.4));                           // => 9
console.log(Math.floor(5.6));                           // => 5
console.log(Math.ceil(5.4));                            // => 6

console.log(Math.min(6, 7, 9, 38, 59, 2));              // => 2
console.log(Math.max(6, 7, 9, 38, 59, 2));              // => 59

console.log(Math.random());                                // => [0 - 1] with decimal
console.log((Math.random() * 10) + 1);                     // => [1 - 11) with decimal
console.log(Math.floor(Math.random() * 10) + 1);           // => [1 - 10] whole numbers

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1) + min);                    // => [10 - 20] with decimal
console.log(Math.floor(Math.random() * (max - min + 1)) + min);        // => [10 - 20] whole numbers