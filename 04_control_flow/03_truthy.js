const userEmail = "jaya@kriti.com" //if statement will consider it as TRUE
//const userEmail = "" //if statement will consider it as FALSE
//const userEmail = [] //if statement will consider it as TRUE

if (userEmail)
{
    console.log("Got user email")
} else{
    console.log("Don't have user email")
}

//Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Value
//Remaining all are Truthy values
//Few examples:
//"0", "false", " ", [], {}, function(){}

if (userEmail.length === 0)
{
    console.log("Array is empty")
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0)
{
    console.log("Object is Empty")
}

//Nullish Coalescing Operator (??): null undefined

let var1 = 5 ?? 10
let var2 = null ?? 10
let var3 = undefined ?? 15
let var4 = null ?? 20 ?? 15

console.log(var1)
console.log(var2)
console.log(var3)
console.log(var4)

//Terniary Operator
//Condition ? True : False

const iceTeaPrice = 100;
(iceTeaPrice <= 80) ? console.log("Less than 80") : console.log("Greater than 80")