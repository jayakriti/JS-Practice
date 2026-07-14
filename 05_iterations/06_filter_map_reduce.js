//const coding = ['js', 'rupby', 'c++', 'java', 'python']

// const value = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )
// console.log(value)

//In above commented section of code variable Value wil not have any data as FOREACH does not return any thing

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNum.filter( (num) => num > 4 )
const newNums1 = myNum.filter( (num) => {
    return num > 4
} ) // if we use {} to write the function then we have to use RETURN keyword or else it won't return anything as {} defins a SCOPE and the statement num > 4 will be considered in a different scope
console.log(newNums)
console.log(newNums1)