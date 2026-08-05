class User {
    constructor (email, password) {
        this.email = email,
        this.password = password;
    }

    set email (email) {
        this._email = email
    }
    get email () {
        return `Email could not be shared.`
    }

    set password (password) {
        this._password = password;
    }
    get password () {
        return `cneviuth${this._password}iuydcughhjxuciovghe`;
    }
}
const hitesh = new User ("h@hitesh.ai", "abhd")
console.log(hitesh.email);
console.log(hitesh.password);





// How to use setter and getter using properties (Function based)

function UserFromProp (email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        set : function (value) {
            this._email = value;
        },
        get : function () {
            return this._email.toUpperCase();
        }
    })

    Object.defineProperty(this, 'password', {
        set : function (value) {
            this._password = value;
        },
        get : function () {
            return `trewd${this._password}rbijuyvtcr`.toLowerCase();
        }
    })
}

const chai = new UserFromProp ("chai@chai.ai", "XJ@IWBUQ")
console.log(chai.email);
console.log(chai.password);



// How to use setter and getter using properties (Object based)

const UserObject = {
    _email: "h@hc.com",
    _password: "abddnjcw",

    get email () {
        return this._email.toUpperCase() + "whDBEHUIBO";
    },

    set email (value) {
        this._email = value;
    }
}

const tea = Object.create(UserObject) 
console.log(tea.email);

