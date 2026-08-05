class User {
    constructor (username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor (username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher = new Teacher ("Deepak", "dp@fb.com", "765432wsdfjy")
teacher.logMe();
console.log(teacher);
teacher.addCourse();

const chai = new User ("masalaChai")
chai.logMe();
console.log(chai);

console.log(teacher instanceof Teacher);         // check if the first argument is an instance of second argument 
console.log(teacher instanceof User);

