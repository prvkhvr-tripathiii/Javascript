// reduce() :-

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (accumulator, currVal) {
    // console.log(`accumulator: ${accumulator} and current Value: ${currVal}`);
    
    return accumulator + currVal;
}, 0)

// console.log(myTotal);


// reduce() with Arrow Function :-

const myTotal1 = myNums.reduce((acc, currVal) => acc + currVal, 0)

// console.log(myTotal1);



const shoppingCart = [
    {
        itemName: 'JS Course',
        price: 2999
    },
    {
        itemName: 'Python Course',
        price: 999
    },
    {
        itemName: 'App Development Course',
        price: 5999
    },
    {
        itemName: 'Web Development Course',
        price: 7999
    }
]

const cartTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(cartTotal);
