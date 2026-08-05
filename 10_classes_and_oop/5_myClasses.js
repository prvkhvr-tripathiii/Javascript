// ES6

class User {
    constructor (username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword () {
        return `${this.password}abc`
    }

    changeUsername () {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Chai", "chai@fb.com", "1234567")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());



// behind the scene         OR        we can say old method (before ES6)

// function User (username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function () {
//     return `${this.password}abhdierje`
// }

// User.prototype.changeUsername = function () {
//     return `${this.username.toUpperCase()}`
// }

const tea = new User ("Tea", "tea@gmail.com", "0987654")
console.log(tea.changeUsername());
console.log(tea.encryptPassword());

