// singleton
// Object.create => this is constructor method to create an OBJECT and it will be SINGLETON type

//object literals

const mySym = Symbol();
const mySym1 = Symbol("key1");

const JsUser = {
    name: "Jaya",
    "full name": "Jaya Kriti",
    [mySym]: "abc",
    [mySym1]: "xyz",
    age: 18,
    location: "Bangalore",
    email: "jaya@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "jaya@kriti.com";
//Object.freeze(JsUser);
//JsUser.email = "jaya@roma.com"; //it won't reflect as the OBJECT has been freezed
console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js Users");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js Users, ${this.name}`); // refering to the same object so used THIS instead of JsUser
    console.log(`Hello Js Users, ${this["full name"]}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());