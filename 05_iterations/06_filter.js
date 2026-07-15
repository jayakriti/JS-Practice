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
console.log("newNums :" , newNums)
console.log("newNums1:" , newNums1)

// If we use FOREACH METHOD

const newNums2 = []
myNum.forEach( (num) => {
    if (num > 4)
    {
        newNums2.push(num)
    }
} )
console.log("newNums2:" , newNums2)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~======*** Books Example ***======~~~~~~~~~~~~~~~~~~~~~~~~~~ //

const books = [
    { title: 'Book One', gener: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', gener: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', gener: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', gener: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', gener: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', gener: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', gener: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', gener: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', gener: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBookHistory = books.filter( (bk) => bk.gener === "History" )
console.log(userBookHistory)

console.log("~~~~~~~~~~~~~~~~~~~~~~");

const userBook1995 = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.gener === "History"
} )
// Without RETURN and SCOPE {} we can directly write it as bk.publish >= 1995 && bk.gener === "History"
console.log(userBook1995)