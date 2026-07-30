//   objects  =  an object is a collection of named values—called properties—that belong together.

// Using Object Literals to create an object and            it creates a non-singleton object

const sym = Symbol("key1");                        // symbol creation of string 'key1'

const user = {
    name : "Prakhar",                              // string
    "full name" : "Prakhar Tripathi",              // string
    [sym] : "myKey1",                              // symbol
    age : 20,                                      // number
    city : "Bengaluru",                            // string
    email : "prakhar@google.com",                  // string
    isLoggedIn : false,                            // boolean
    lastLogInDays : ["Wednesday", "Thursday"]      // array
}

console.log(user.name);                               // => Prakhar
console.log(user["name"]);                            // => Prakhar

// console.log(user.full name);                       // => Invalid syntax
console.log(user["full name"]);                       // => Prakhar Tripathi            It become important to remember this method of accessing values

console.log(user[sym]);                                  // => myKey1                   It is important that how have we accessed the symbol here
console.log(typeof sym);                                 // => symbol                   

user.email = "prakhar@chatgpt.com";                      // changes the value of a key
// Object.freeze(user);                                     // used to prevent any change to the object, in simple words it locks the object
user.email = "prakhar@microsoft.com";                    // will not work as we've already locked the object

console.log(user["email"]);                              // => prakhar@chatgpt.com

console.log(user);

user.greeting = function () {                               // it will only work if you have not frozen the the object, ensure that before adding/ updating anything in the object
    console.log(`Hello, ${this["full name"]}`);
    console.log("How are you doing??");
}

user.greeting();                                            // => Hello, Prakhar Tripathi
                                                            //    How are you doing??

console.log(user.greeting);                                 // => [Function (anonymous)]



