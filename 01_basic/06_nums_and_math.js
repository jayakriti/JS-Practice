const score = 400;
console.log(score);
console.log(typeof score);

const balance = new Number(100);
console.log(balance);
console.log(typeof balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const anotherNumber = 123.8165187;
console.log(anotherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// ```````````````````````````````` MATHS ```````````````````````````````` //

console.log(Math);
console.log(Math.PI);

console.log(Math.abs(-5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random()*10) + 1));

// To get the value between some range suppose between 10 & 20

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min);