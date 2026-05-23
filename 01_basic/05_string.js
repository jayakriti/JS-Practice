/*const name = "JayaKriti";
const repoCount = 50;

//console.log(name + repoCount + " value");
//This is old way of concatinating strings and values

const newWay = `My name is ${name} and my repositery count is ${repoCount}.` //new way to concatinate strings and values
console.log(newWay);

//another way to declare STRING as a form of OBJECT
const anotherName = new String('Rudra');
console.log(anotherName);
console.log(anotherName[0]);
console.log(anotherName.__proto__);

console.log(anotherName.length);
console.log(anotherName.toUpperCase());

console.log(anotherName.charAt(2));
console.log(anotherName.indexOf('d'));

const newString = anotherName.substring(0,2)
console.log(newString);

const anotherString = anotherName.slice(-5,2)
console.log(anotherString);

const spaceString = "    Jaya     ";
console.log(spaceString);
console.log(spaceString.trim());

const url = "https://www.jaya%20kriti.com/roma%20kumari"
console.log(url);
console.log(url.replaceAll('%20','-'));

console.log(url.includes('jaya'));
console.log(url.includes('hello')); //include function is case sensitive

const secondName = "jaya-kriti-roma"
console.log(secondName.split('-')); */

// More functions that cane be used on STRING

const newName = "RudraPrakash"

console.log(newName.at(1));
console.log(newName.at(-7));
console.log(newName.endsWith('s'));
console.log(newName.endsWith('h'));
console.log(newName.includes('Pra')); //include function is case sensitive
console.log(newName.repeat(2));