const user = {
    username: "Jaya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this); // here this is refering to same context, i.e., the same object
    }
}

user.welcomeMessage();
user.username = "Kriti";
user.welcomeMessage();
console.log(this); //there is no object created in global so here this will refer to empty object
console.log("--------------------------------------------------");


function chai() {
    let username = "Jaya";
    console.log(username);
    console.log(this.username); //calling other function variable with this keyword like here won't work, it will work only with OBJECT not in the function
}
chai()

// ===================== Arrow Function ===================== //

const chai1 = () => {
    let username = "Kriti";
    console.log(username);
    console.log(this.username);
}
chai1()

//BELOW IS ECXPLICIT RETURN TYPE
const addTwo = (num1,num2) => {
    return num1 + num2;
}
console.log(addTwo(4,3))

//IF {} IS USED IN WITING ARRAOW FUNCTION THEN "RETURN"  HAS TO BE WRITTEN, IF USED () THEN NO RETURN KEYWORD HAS TO BE WRITTEN
const addTwo1 = (num1,num2) => num1 + num2; //this way of writing arrow function is implicit return type
//OR
//const addTwo1 = (num1,num2) => (num1 + num2);
console.log(addTwo1(4,5))

const addTwo2 = (num1,num2) => ({username:"Jaya"}); // if we are returning object it has to be written within ({})
console.log(addTwo2())