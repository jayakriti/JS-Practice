//IF

const isLoggedIn = true;
const temprature = 41;

if (temprature < 50) {
    console.log("less than 50");
}
else {
console.log("Temprature is greater than 50")
}

const score = 200;
if (score > 100)
{
    let power = "fly";
    console.log(`User Power: ${power}`)
}

//Emplicit Scope : It is executed in single line without giving {}, but if we want to write multiple lines of code then at the end of each statement we should give comma(,) and at the end of LAST statement we have to gice semicolon(;).
//  we should alway avoid to write the code as shown below.

//const balance = 1000;
//if (balance < 500) console.log("test"), console.log("test2");

const balance = 1000;
if (balance < 500)
{
    console.log("less than 500")
}else if (balance < 750)
{
    console.log("less than 750")
}else if (balance < 900)
{
    console.log("less than 900")
}else
{
    console.log("less than 1200")
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
//------------------------------------------------------------------------------------

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3)
{
    console.log("Allow to buy Course");
}
if (loggedInFromGoogle || loggedInFromEmail)
{
    console.log("User Logged In");
}