const coding = ['js', 'rupby', 'c++', 'java', 'python']

//function written like this as in without name are called as CALLBACK function
// we can writw cqallback or arrow function in FOREACH

coding.forEach( function (arr) {
    console.log(arr);
})

console.log("~~~~~~~~~~~~~~~~~~~~~~");

coding.forEach((arr) => {
    console.log(arr);
})

console.log("~~~~~~~~~~~~~~~~~~~~~~");

function printMe(arr) {
    console.log(arr)
}

coding.forEach(printMe); // If a Function is already written somewhere and we want to use it inside FOREACH we can give it reference as in its name and the FUNCTION will be executed
console.log("~~~~~~~~~~~~~~~~~~~~~~");

coding.forEach( (arr, index, myArray) => {
    console.log(arr, index, myArray)
})

console.log("~~~~~~~~~~~~~~~~~~~~~~");

const myCoding = [
    {
        languageName : 'JavaScript',
        languageFileName : 'js'
    },
    {
        languageName : 'Java',
        languageFileName : 'java'
    },
    {
        languageName : 'Python',
        languageFileName : 'py'
    },
]

myCoding.forEach( (arr) => {
    console.log(`For "${arr.languageName}" we use file name as "${arr.languageFileName}"`)
} )