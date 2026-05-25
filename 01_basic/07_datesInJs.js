let myDate = new Date();
console.log(typeof myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

let myCreatedDate = new Date(2026, 0, 18); //months counting starts from 0 like an ARRAY count
console.log(myCreatedDate.toDateString());