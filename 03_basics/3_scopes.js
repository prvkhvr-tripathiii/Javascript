var c = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30                  // it will change the value of c to 30
}

console.log(a);                     // => ReferenceError: a is not defined
console.log(b);                     // => ReferenceError: b is not defined
console.log(c);                     // it gives output 30 despite the declaration being happened in if block

let a = 300

if (true) {                     // Block Scope
    let a = 10
    console.log(a);                     // => 10
}
console.log(a);                         // => 300





function one () {
    const username = "Hitesh"

    function two () {
        const website = "youtube"
        console.log(username);
    }
    console.log(website);                   // => ReferenceError: website is not defined
    
    two();                       // => Hitesh
}
one();

if(true) {
    const username = "Hitesh"
    if(username === "Hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    console.log(website);              // => ReferenceError: website is not defined
}

console.log(username);              // => ReferenceError: username is not defined


// ++++++++++++++++++++++  .Interseting. +++++++++++++++++++++++\\

// console.log(addOne(5));         ✔ Allowed

function addOne(num) {
    return num + 1
}

console.log(addOne(5));

// console.log(addTwo(5));          x Not allowed

const addTwo = function (num) {                    // this function cannot be called before it's declaration
    return num + 2                                 // as it is being stored in a variable
}

console.log(addTwo(5));
