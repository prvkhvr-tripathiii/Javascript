const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);

// Math.PI = 5           // we can't change the value of PI because the properties (e.g. writable, enumerable and configurable) of this object are set to false and the value of PI is hardcoded

console.log(Math.PI);

const chai = {
    name: 'Ginger Chai',
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log("Chai fat gyi.");
    }
}

console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}