const userEmail = "hitesh@email.com"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// falsy values ---
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// true values ---
// "0", "false", " ", [], {}, function(){}



 
// how to check if input is an array and object

const name = []
if (name) {                                   // Always gives true even if the array is empty
    console.log("Got a name.");
}
if (name.length === 0) {
    console.log("Name is empty.");
}

const userDetail = {}
if (userDetail) {                             // Always gives true even if the object is empty
    console.log("Got details.");
}
if (Object.keys(userDetail).length === 0) {
    console.log("Object is empty.");
}




// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10           // => 5
// val1 = null ?? 10           // => 10
// val1 = undefined ?? 15           // => 15
 
val1 = null ?? 10 ?? 20           // => 10

console.log(val1);



// Ternary Operator    -     condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Price of Tea is more than 79") : console.log("Price of Tea is less than 80");
