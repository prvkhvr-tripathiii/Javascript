const user = {
    username: "Hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website.`);              // this is used for current context 
        console.log(this);
    }
}

user.welcomeMessage()                // => Hitesh, welcome to the website.
user.username = "Sam"
user.welcomeMessage()                // => Sam, welcome to the website.

console.log(this);                      // => {}


// function one() {
//     let username = "Hitesh"
//     console.log(this.username);               // => undefined
// }
// one()
    
// const one = function() {
//     let username = "Hitesh";
//     console.log(this.username);               // => undefined
// }


const one = () => {
    let username = "Hitesh";
    console.log(this.username);               // => undefined
}
one();


const addTwo = (num1, num2) => {                 // explicit return, only with curly braces
    return num1 + num2;
}                  // if we use curly braces instead of parenthesis, we must use explicit return
console.log(addTwo(5, 8));                        // 13


const addThree = (num1, num2, num3) => num1 + num2 + num3;               // implicit return, only with parenthesis
console.log(addThree(5, 8, 6));                       // 19


const chai = (name) => {chai: "Taj"}                 // here, function is returning an object and it can't return an object directly         
console.log(chai("Taj"));                        // => undefined


const coffee = (name) => ({coffee: "Brew"})              // return type is an object, but it is wrapped in a parenthesis
console.log(coffee("Brew"));                       // => { coffee: 'Brew' }


// object cannot be returned directly, that's why we must wrap the object with a parenthesis


// const myArr = [2, 5, 6, 8, 4]

// myArr.forEach (function () {})
// myArr.forEach(() => {})
// myArr.forEach(() => ())
