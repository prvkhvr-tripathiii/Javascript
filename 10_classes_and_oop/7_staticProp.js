class User {
    constructor (username) {
        this.username = username;
    }

    logMe () {
        console.log(`Username: ${this.username}`);
    }

    static createId () {               // static keyword prevent a class's child or object to use a function declared in that class.
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId());          // => hitesh.createId is not a function


class Teacher extends User {
    constructor (username, email) {
        super (username)
        this.email = email;
    }
}

const iphone = new Teacher ("Iphone", "i@phone.com")
console.log(iphone);
iphone.logMe();
// console.log(iphone.createId());          // => iphone.createId is not a function
 
