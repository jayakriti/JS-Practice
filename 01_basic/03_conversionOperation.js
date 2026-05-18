let score = 45;

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score); //converting the value of score into Number
console.log(typeof valueInNumber);
console.log(valueInNumber);

// 33 => 33
// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn); //converting the value of isLoggedIn into Boolean
console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false
// "jaya" => true

let someNumber = 45;
let SrtingSomeNumber = String(someNumber); //converting the value of someNumber into String
console.log(typeof SrtingSomeNumber);
console.log(SrtingSomeNumber);

// ********************************** Operations ********************************** //

let value = 3;
let negValue = -value;
console.log(negValue);
console.log(2+2, 2-2, 2*2, 2/3, 2%3, 2**3);

let str1 = "Hello";
let str2 = " Jaya!";
let str3 = str1+str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");