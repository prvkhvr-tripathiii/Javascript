const user = {                // Object Literals
    username: "Hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails : function () {
        // console.log("Got user details from the database.");
        console.log(`Username: ${this.username}`);
        console.log(this);           // prints all the data inside this object (current context)
    }
}

console.log(user.username);
user.getUserDetails()



// here, in this program there is nothing in current context
console.log(this);           // => {}

// but when we use this same print statement in browser
// the output will be window, and the prototypes of window (means all the functions it can provide)




// Constructor Function 

// when we need to create multiple users same as user, we need to creste different different objects like this
// and that's a very big task to do, and it's not possible
// then there came Constructor Function

// const promiseOne = new Promise ()
// const date = new Date() 

// here `new` is the Constructor function, it creates new context for a same object
// and we do not need to define return statement in the function to use it with new keyword, it implicitly defines that

// when we use `new` keyword, it creates an empty object called as Instance
// Step 1:- new object creation
// Step 2:- constructor function is being called due to the usage of `new` keyword
// Step 3:- all the statements from the function get injected in the empty object (Instance)
// Step 4:- we get the object with new instance/ context  
 
function User (username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function () {
        console.log(`Welcome ${this.username}!`);
    }

    // return this;
}

const userOne = User ("Hitesh", 5, false)
const userTwo = User ("Chai", 6, true)           // overWrites the values in the same context
console.log(userOne);


// Using `new` keyword

const userOne = new User ("Hitesh", 5, false)
const userTwo = new User ("Chai", 6, true) 

console.log(userOne);
console.log(userTwo);

userOne.greetings()

console.log(userOne.constructor);
