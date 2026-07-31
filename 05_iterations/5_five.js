const coding = ["js", "rb", "java", "py", "cpp"] 

coding.forEach(function (item) {
    console.log(item);
})

coding.forEach((item) => {
    console.log(item);
})

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)                // All are same


coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})


const myCoding = [
    {
        language: "JavaScript",
        fileName: "js"
    },
    {
        language: "Java",
        fileName: "java"
    },
    {
        language: "Python",
        fileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.fileName);
})