// const marvelHeros = ["Thor", "Hulk", "Cap"];
// const DCHeros = ["Batman", "Superman", "Flash"];

// const heros = marvelHeros.concat(DCHeros);                     // used for conacatenation of two arrays
// console.log(heros);                                            // => [ 'Thor', 'Hulk', 'Cap', 'Batman', 'Superman', 'Flash' ]

// const newHeros = [...marvelHeros, ...DCHeros];                 // generally used, because we can concat multiple arrays at once and known as 'Spread operator'
// console.log(newHeros);                                         // => [ 'Thor', 'Hulk', 'Cap', 'Batman', 'Superman', 'Flash' ]

// marvelHeros.push(DCHeros);                                     // pushes entire array as a single value
// console.log(marvelHeros);                                      // => [ 'Thor', 'Hulk', 'Cap', [ 'Batman', 'Superman', 'Flash' ] ]

const interestingArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
const flattenedArray = interestingArray.flat(Infinity);           // arrayName.flat(nestingLevel);          nestingLevel = depth of nesting
console.log(flattenedArray);                                      // => [  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11  ]


console.log(Array.isArray("code"));                               // => false
console.log(Array.from("code"));                                  // => [ 'c', 'o', 'd', 'e' ]          in the place of "code" (string), it can be any data type like object, array, etc

console.log(Array.from({name: "Prakhar", age: 20, city: "Darjeeling"}));              // => []           it returns empty array because, it confuses for the element it need to make an array from
                                                                                      //                 we need to mention that the array will be either of keys or values

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));                     // => [ 100, 200, 300 ]
