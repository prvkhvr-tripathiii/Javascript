// Number vs Number

console.log(2 > 1);
console.log(2 >= 1);
console.log(1 == 2);
console.log(1 != 2);
console.log(1 < 2);
console.log(1 <= 2);



// String vs Number

console.log("2" > 1);      // JS convert string to number here automatically
console.log(1 < "2");      // JS convert string to number here automatically



// null vs Number

console.log(null > 0);       // => false
console.log(null < 0);       // => false
console.log(null == 0);      // => false
console.log(null != 0);      // => true
console.log(null <= 0);      // => true
console.log(null >= 0);      // => true



// undefined vs Number

console.log(undefined > 0);       // => false
console.log(undefined < 0);       // => false
console.log(undefined == 0);      // => false
console.log(undefined != 0);      // => true
console.log(undefined <= 0);      // => false
console.log(undefined >= 0);      // => false



// Boolean vs Number

console.log(true > 2);       // => false
console.log(true < 2);       // => true

console.log(true > 1);       // => false
console.log(true < 1);       // => false
console.log(true == 1);      // => true

console.log(false > 1);       // => false
console.log(false < 1);       // => true

console.log(false > 0);       // => false
console.log(false < 0);       // => false
console.log(false == 0);      // => true



// String vs String

console.log("Hello" > " ");      // => true
console.log("Hello" < " ");      // => false



// null vs String

console.log(null > "");       // => false
console.log(null < "");       // => false
console.log(null == "");      // => false
console.log(null != "");      // => true
console.log(null <= "");      // => true
console.log(null >= "");      // => true




//    ===

console.log("2" === 2);            // => false     ----    in this comparison, type comparison does not happen
console.log(2 === 2);              // => true