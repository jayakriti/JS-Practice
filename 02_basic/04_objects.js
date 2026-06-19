//const frndMake = new Object();

const frndMake = {};

frndMake.id = "123abc";
frndMake.name = "Rahul";
frndMake.isLoggedIn = false;

console.log(frndMake);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Jaya",
            lastName: "Kriti"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

const obj4 = Object.assign({}, obj1, obj2, obj3) //we use this syntax of adding object very less

const obj5 = {...obj1, ...obj2,...obj3} //MOSTLY, we use this syntax of adding object
console.log(obj4);
console.log(obj5);

console.log(Object.keys(frndMake)); // we can retrive only keys of an object like this and it will result an ARRAY with all KEYS
console.log(Object.values(frndMake)); // we can retrive only values of an object like this and it will result an ARRAY with all VALUES

console.log(frndMake.hasOwnProperty("isLoggedIn"));