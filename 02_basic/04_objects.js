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