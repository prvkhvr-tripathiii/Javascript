//     array   =  it can store multiple data types in a single array, the size here is not fixed. 

const arr = [0, 1, 2, 3, 4, 5, 6, 7]
const heros = ["Ironman", "Thor", "Hulk", "Rogers"]

const arr1 = new Array(2, 4, 6, 7, 9)

console.log(arr);                           // => [ 0, 1, 2, 3, 4, 5, 6, 7 ]
console.log(heros);                         // => [ 'Ironman', 'Thor', 'Hulk', 'Rogers' ]
console.log(arr1);                          // => [ 2, 4, 6, 7, 9 ]

console.log(heros[2]);                         // => Hulk

heros.push("Loki");
console.log(heros);                            // => [ 'Ironman', 'Thor', 'Hulk', 'Rogers', 'Loki' ]

console.log(heros.pop());                      // => Loki
console.log(heros);                            // => [ 'Ironman', 'Thor', 'Hulk', 'Rogers' ]

arr.unshift(9);
console.log(arr);                                 // => [  9, 0, 1, 2, 3, 5, 6, 7  ]
console.log(arr.shift());                         // => 9
console.log(arr);                                 // => [  0, 1, 2, 3, 5, 6, 7  ]

console.log(arr.includes(9));                        // => false
console.log(arr.indexOf(4));                         // => 4

const newArr = arr.join();
console.log(newArr);                                 // => 0,1,2,3,4,5,6,7
console.log(typeof newArr);                          // => string


console.log("Original", arr);                          // => Original [  0, 1, 2, 3, 5, 6, 7  ]

const myn1 = arr.slice(1, 3);

console.log(myn1);                                     // => [ 1, 2 ]
console.log("After slicing", arr);                     // => After slicing [  0, 1, 2, 3, 5, 6, 7  ]

const myn2 = arr.splice(1, 3);

console.log(myn2);                                     // => [ 1, 2, 3 ]
console.log("After splicing", arr);                    // => After splicing [ 0, 4, 5, 6, 7 ]
