"use strict";  // used to treat all JS code as newer version

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// |   Stack is used to store all the primitive data type values.  |
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// alert(3 + 3)  // we are using node.js, not browser

let name = "Prakhar"
let age = 18
let isLoggedIn = true

console.table([name, age, isLoggedIn])

/* Types :-

1. Primitive Data Type - values are immutable. operations create new values instead.


// number => int and float
// bigInt => values larger than number
// string => written inside single & double quotes and template literals
// boolean => stores true and false only
// null => declared by the programmer intentionally
// undefined => auto-declared to the values which are registered but not initialized
// symbols => it creates a unique identifier

*/

// null
console.log(typeof null) // => object

// undefined
console.log(typeof undefined) // => undefined

// symbols
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log (id1 === id2) // => false