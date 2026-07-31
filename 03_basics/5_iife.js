// Immediately Invoked Function Expressions (IIFE)

 // To avoid Global Pollution in JS, we use IIFE

// function chai() {                            // instead of this
//     console.log(`DB CONNECTED`);
// }
// chai()


(function chai() {                            // we use this            it is NAMED IIFE
    console.log(`DB CONNECTED`);                     // It is must to use semi-colon to tell this function to stop the context
})();

( () => {                                    // or this (Arrow Function)       it is SIMPLE IIFE
    console.log(`DB CONNECTED TWO`);
})();

( (name) => {                                    // or this (Arrow Function with parameters)
    console.log(`DB CONNECTED THREE ${name}`);
})("Hitesh")