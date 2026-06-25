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