//   objects  =  an object is a collection of named values—called properties—that belong together.

// Singleton = A singleton is an object that has only one shared instance in an application.

// Using Constructor method to create an object and                   it creates a singleton object

const user = Object.create(null);                      // Object.create() is a function used to create a new object with a chosen prototype.
const jsUser = new Object();
const tinderUser = {};

jsUser.id = 1234;
jsUser.name = "Prakhar";


console.log(user);
console.log(jsUser);

const regularUser = {
    email: "prakhar@google.com",
    fullname: {
        firstname: "Prakhar ",
        lastname: "Tripathi"
    },
    age: 20
}

console.log(regularUser.fullname?.firstname);
console.log(regularUser.fullname.firstname);                // the question mark removes the chance of error        // it will give undefined if that key is not there
                                                             // it means that if the fullname is not in the regularUser it will not give any error


jsUser.details = regularUser;
// console.log(jsUser);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj3 = {
    5: "e",
    6: "f"
}

console.log({obj1, obj2});           // => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

console.log(Object.assign({}, obj1, obj2, obj3));          // => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }      here, {} doesn't make any difference,
                                                                 // {} here, works as target object, and others work as source,      means all the elements of source objects go to target object
console.log(Object.assign(obj1, obj2, obj3));              // => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }       here, obj1 acts as target and others act as source

console.log({...obj1, ...obj2, ...obj3});                     // spread operator, it works same for merging, it can merge multiple objects at once


const users = [
    {
        userId: 1,
        email: "h@gmail.com"
    },
    {
        userId: 2,
        email: "i@gmail.com"
    },
    {
        userId: 3,
        email: "j@gmail.com"
    },
    {
        userId: 4,
        email: "k@gmail.com"
    }
]

console.log(users[1].email);

console.log(jsUser);
console.log(Object.keys(jsUser));                               // returns all the keys of an Object in a array

console.log(Object.values(jsUser));                              // returns all the values of an Object in a array

console.log(Object.entries(jsUser));                             // it returns all the entries of an Object

console.log(jsUser.hasOwnProperty('isLoggedIn'));                // to check if an object has a property/attribute


// Destructuring...........

const course = {
    coursename: "JS in Hindi",
    price: "000",
    courseInstructor: "Hitesh"
}

console.log(course.courseInstructor);                  // Bilkul sahi hai

const {courseInstructor} = course;                      // Destructuring  
console.log(courseInstructor);

const {courseInstructor : instructor} = course;                      // with a name change too             
console.log(instructor);

// React ............

// const navbar = (props.company) => {
// .
// .
// .
// }
// navbar(company = "hitesh")


// Destructuring in React........

// const navbar = ({company}) => {
// .
// .
// .
// }

// navbar(company = "hitesh")