const firstName = "Prakhar"             // old way of string declaration
const lastName = `Tripathi`
const repoCount = 50

console.log (firstName + lastName + " has " + repoCount + " repositaries.")            // old way of concatenation, should use template literals instead

console.log(`Hello my name is ${firstName} ${lastName} and I have ${repoCount} repositaries.`);             // concatenation using template literals (modern way)

// modern way of declaring a string

const gameName = new String("BGMI");

console.log(gameName[2]);                          // => M
console.log(gameName.__proto__);                   // => {}

console.log(gameName.toLowerCase());               // => bgmi
console.log(gameName.charAt(3));                   // => I
console.log(gameName.indexOf('M'));                // => 2

const newGameName = gameName.substring(0, 2)
console.log(newGameName);                          // => BG

const anotherName = gameName.slice(-2, 4)
console.log(anotherName);                          // => MI

const newString = "        Prakhar       "
console.log(newString);                               // =>         Prakhar       
console.log(newString.trim());                        // => Prakhar

const url = "https://www.prakhar.com/prakhar%20tripathi"
console.log(url.replace("%20", '-'));                    // => https://www.prakhar.com/prakhar-tripathi

console.log(url.includes("prakhar"));                    // => true

const line = "They are playing Cricket in the rain."
const words = line.split(" ");
console.log(words);
