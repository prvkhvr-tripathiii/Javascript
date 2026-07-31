function calculateCartPrice(...num1) {                             // rest operator - it put all the arguments in an array
    return num1;
}

console.log(calculateCartPrice(2));                      // => [ 2 ]

console.log(calculateCartPrice(200, 400, 500));                     // => [ 200, 400, 500 ]

const user = {
    username: "Hitesh",
    price: 199
}

function handleObject (anyobject) {                          // here, using `anyobject` makes the function generic which means it can handle any object
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);               // it is necessary to check the type-safety
}

handleObject(user);                  // => Username is Hitesh and price is 199

handleObject({                          // same as handleObject(user), what differs is in this method we do not need to create an object to pass in this function
    username: "Sam",
    price: 399
})                                      // => Username is Sam and price is 399

const myNewArr = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArr));                   // => 400

console.log(returnSecondValue([200, 400, 500, 600]));                  // => 400

