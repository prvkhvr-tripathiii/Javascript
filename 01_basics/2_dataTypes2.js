/*

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// |   Heap is used to store all the non-primitive data type values.  |
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

2. Non-primitive Data Type - does not store values directly in the variable. 
                            Instead, the variable stores a reference pointing to where the actual data is stored in memory.
                            in simple words, the variable here stores address of the memory where the actual data is stored in memory.

*/

// objects => 

const myData = {
    name : "Prakhar Tripathi",
    age : 20,
    course : "BTech"
}

// arrays => 

const heros = ["Thor", "Cap", "Ironman"]

// functions => 

const printName = function () {
    console.log("Prakhar Tripathi")
}