//Immediately Invoked Function Expression (IIFE)

//To execute any function immediately and to avoid any GLOBAL Pollution we use IIFE. SYNTAX: ()();

(function chai() {
    //Named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    //This is just IIFE and it is written as ARROW FUNCTION
    console.log(`DB CONNECTED TWO ${name}`);
})("Jaya")