// Work done in browser after inspecting element   
//              DOM Manipulation


document.getElementById('title')               // => <h1 id=​"title" class=​"test" style=​"background-color:​ green;​ padding:​ 15px;​ border-radius:​ 15px;​">​ DOM Learning on Chai aur Code ​</h1>​
document.getElementById('title').id               // => 'title'
document.getElementById('title').class               // => undefined            do not return class name
document.getElementById('title').className               // => 'heading'              does return class name
document.getElementById('title').getAttribute('id')               // => 'title'            does return id name
document.getElementById('title').getAttribute('class')               // => 'heading'             does return class name
document.getElementById('title').setAttribute('class', "test heading")               // => undefined         adds a class attribute with value test and heading as well
const title = document.getElementById('title')               // => undefined             it stores the 'title' named document in title
title.style.backgroundColor = "Green"               // => 'Green'           changes the background to graan
title.style.padding = "15px"               // => '15px'              increases padding to 15 px
title.style.borderRadius= "5px"               // => '5px'                provide a border radius of 5px
title.style.borderRadius = "15px"               // => '15px'                provide a border radius of 15px

// Interesting

title.textContent               // => ' DOM Learning on Chai aur Code '
title.innerHTML               // => ' DOM Learning on Chai aur Code '
title.innerText               // => 'DOM Learning on Chai aur Code'

// After adding <span> Test text </span> with display none

title.innerText               // => 'DOM Learning on Chai aur Code'          It returns value that can be seen
title.textContent             // => ' DOM Learning on Chai aur Code Test text'             It returns whole value, even if that is not visible
title.innerHTML               // => ' DOM Learning on Chai aur Code <span style="display: none">Test text</span>'                  It returns whole HTML value

document.querySelector('h2')               // => <h2>​Lorem ipsum dolor sit amet.​</h2>​
document.querySelector('#title')               // => <h1 id=​"title" class=​"test heading" style=​"background-color:​ green;​ padding:​ 15px;​ border-radius:​ 15px;​">​…​</h1>​
document.querySelector('.heading')               // => <h1 id=​"title" class=​"test heading" style=​"background-color:​ green;​ padding:​ 15px;​ border-radius:​ 15px;​">​…​</h1>​

document.querySelector('input[type="password"]')               // => <input type=​"password" name id>​

document.querySelector('ul')               // => <ul>​…​</ul>​
const myUl = document.querySelector('ul')               // => undefined
myUl.querySelector('li')               // => <li style=​"background-color:​ green;​ padding:​ 10px;​">​…​</li>​::marker​"one"</li>​
const turnGreen = myUl.querySelector('li')               // => undefined
turnGreen.style.backgroundColor = 'green'               // => 'green'
turnGreen.style.padding = '10px'               // => '10px'
turnGreen.innerText = "five"               // => 'five'

document.querySelectorAll('li')
               // => NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()length: 0name: "values"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
               // => 301_one.html:1 Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received
const tempList = document.querySelectorAll('li')               // => undefined
tempList               // => NodeList(3) [li, li, li]
const myArr = [1, 2, 3, 4]                // => undefined
myArr               // => (4) [1, 2, 3, 4]0: 11: 22: 33: 4length: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
tempList.style.color = 'green'               
               // => VM3933:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
               // =>      at <anonymous>:1:22

tempList[0].style.color = 'green'               // => 'green'
const myH1 = document.querySelectorAll('h1')               // => undefined
myH1               // => NodeList [h1#title.heading]
myH1.style.color = 'red'
               // => VM4843:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
               // =>     at <anonymous>:1:18
// Simple thing is we cannot perform operation directly on a NodeList
// but we access them and perform operations on them with their indices

tempList.forEach((item) => {                // => undefined
  item.style.color = 'red';
})

// We can iterate on NodeList, but cannot use map, rduce or filter. So, we need to convert the same to an Array.

document.getElementsByClassName('list-item')
               // => HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object

// We cannot iterate on HTML Collections, but document.getElementsByClassName returns a HTML Collection. So, we need to convert the same to an Array.

// NodeList to Array conversion

const myConArr = Array.from(tempClassList)          // => undefined

myConArr.forEach((item) => {              // => undefined
    item.style.color = 'orange'
})
