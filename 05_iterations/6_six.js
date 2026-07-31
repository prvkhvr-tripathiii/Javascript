const coding = ["js", "rb", "java", "py", "cpp"]

const values = coding.forEach((item) => {
    console.log(item);
    return item;
})

console.log(values);              // => undefined


// filter() :-

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => num > 4);            // Implicit return

const new1Nums = myNums.filter((num) => {              // Explicit return 
    return num > 4;
})


// Using forEach() :-

const new2Nums = []

myNums.forEach((num) => {
    if (num > 4) {
        new2Nums.push(num);
    }
})

console.log(new2Nums);


// In real world :-

const books = [
    { title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
];

let userBooks = books.filter( (item) => item.genre === 'History')

userBooks = books.filter( (book) => { 
    return book.publish >= 1995 && book.genre === 'History';
})

console.log(userBooks);
