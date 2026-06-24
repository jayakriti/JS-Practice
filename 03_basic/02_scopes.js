let a = 250;
var c = 300;

if(true) {
    let a = 10;
    const b = 20;
    var c = 30;

    console.log("INNER: ", a)
}

console.log(a)
//console.log(b)
console.log(c)
console.log("-----------------------------------");

function one() {
    const username = "Jaya"

    function two() {
        const website = "youtube";
        console.log(username);
    }
    //console.log(website); //it is throwing error as website is out of scope

    two();
}
one()
console.log("-----------------------------------");

if(true) {
    const username = "Kriti"
    if(username === "Kriti")
    {
        const website = " youtube";
        console.log(username + website);
    }
    //console.log(website); //it is throwing error as website is out of scope
}
//console.log(username); //it is throwing error as username is out of scope
console.log("-----------------------------------");

// ============================ INTERESTING EXAMPLE ============================ //

addOne(6); // calling before function declaration won't throw an error in this type of function declaration
function addOne(num) {
    return num + 1;
}
addOne(5);

// addTwo(6) //calling the function before declaring will throw an error if we have declared a function as below, while it will accept calling after function definition. that's why addTwo(5) is not throwing an error
const addTwo = function(num) {
    return num + 2;
}
addTwo(5)