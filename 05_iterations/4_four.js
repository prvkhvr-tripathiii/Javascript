const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}




const newMap = new Map();
newMap.set('IN', "INDIA")
newMap.set('USA', "UNITED STATES OF AMERICA")
newMap.set('FR', "FRANCE")

newMap.set('IN', "INDIA")

for (const key in newMap) {
    console.log(key);
}   