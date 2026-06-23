function sayMyName() {
    console.log("J");
    console.log("A");
    console.log("Y");
    console.log("A");
}

sayMyName();
console.log("-----------------------------------------------");

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

const sum = addTwoNumbers(3, 4)
console.log("SUM : ", sum);
console.log("-----------------------------------------------");

function addTwoNumbers2(number1, number2) {
    // let result = number1 + number2;
    // return result;
            // OR
    return number1 + number2;
}

const result = addTwoNumbers2(5, 3)
console.log("RESULT : ", result);
console.log("-----------------------------------------------");

function loginUserMessage(username) {
    return `${username} just logged in`
}

console.log(loginUserMessage("Jaya"))
console.log(loginUserMessage()) //if we do not pass any argument, it will consider it as undefined
console.log("-----------------------------------------------");

function loginUserMessage1(username = "sam") {
    return `${username} just logged in`
}
console.log(loginUserMessage1()); //if we do not pass any argument by default it will take it as SAM
console.log(loginUserMessage1("Kriti"));
console.log("-----------------------------------------------");

function loginUserMessage2(username) {
    if(!username)
    {
        console.log("Please enter a Username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage2()); //if we do not pass any argument it will return the IF CONDITION Message
console.log(loginUserMessage2("Roma"));
console.log("-----------------------------------------------");

function calculateCartPrice(...num1) { //... is spread operator as well as REST operator and here we are using it as REST operator
    return num1
}

console.log(calculateCartPrice(200, 600, 1200, 750));
console.log("-----------------------------------------------");

const user = {
    username: "Jaya",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user);
handleObject({
    username: "Kriti",
    price: 250
});

console.log("-----------------------------------------------");

const myNewArray = [200, 350, 50, 880];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([55, 60, 76, 89]));