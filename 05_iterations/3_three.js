// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const element of arr) {
    console.log(element);
}

const greeting = "Hello World!"
for (const character of greeting) {
    if (character == " ") {
        continue;
    }
    console.log(`Each character of ${character}`);
}



// Maps -

const newMap = new Map();
newMap.set('IN', "INDIA")
newMap.set('USA', "UNITED STATES OF AMERICA")
newMap.set('FR', "FRANCE")

newMap.set('IN', "INDIA")

// console.log(newMap);



for (const key of newMap) {
    console.log(key);  
}
// => [ 'IN', 'INDIA' ]
//    [ 'USA', 'UNITED STATES OF AMERICA' ]
//    [ 'FR', 'FRANCE' ]

for (const [key, value] of newMap) {
    console.log(key, ':-', value);
}
// => IN :- INDIA
//    USA :- UNITED STATES OF AMERICA
//    FR :- FRANCE




// Objects -

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {              // TypeError: myObject is not iterable
    console.log(key, ':-', value);
}