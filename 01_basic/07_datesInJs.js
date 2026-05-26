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

let newCreatedDate = new Date("01-18-2026"); // MM-DD-YYYY formate
console.log(newCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // display time in Milisecond
console.log(newCreatedDate.getTime()); // display time in Milisecond for that Date
console.log(Math.floor(Date.now()/1000)); //display time in second

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1); //It counts month from 0 so adding 1 to make the result normal
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long"
})) // display the day in long formate as "Monday" or, "Tuesday"