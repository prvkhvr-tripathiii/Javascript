let myName = "hitesh          "
let myChannel = "Chai        "

console.log(myName.trim().length);   

// console.log(myName.trueLength());

let myHeros = ["Thor", "Hulk"]

let heroPower = {
    thor : "Hammer", 
    spiderman : "Anger",

    getSpiderPower : function () {
        console.log(`Spider power id=s ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function () {                   // Function injection in global Object, all the children of Object (e.g. Arrays, Strings, etc) will get the access to this method automatically
    console.log(`Hitesh is present in all objects.`); 
}

heroPower.hitesh();   

myHeros.hitesh();

Array.prototype.heyHitesh = function () {            // Function injection in Global Array, but it will share this method to its sibling or parents
    console.log(`Hitesh says hello.`);
}

myHeros.heyHitesh();  



// Inheritence


const user = {
    name: "Hitesh",
    email: "chai@google.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user


// Moder syntax :-

Object.setPrototypeOf(teachingSupport, teacher)






let anotherUsername = "ChaiAurCode         "

String.prototype.trueLength = function () {
    console.log(`True length of ${this} is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"  Hello  ".trueLength();