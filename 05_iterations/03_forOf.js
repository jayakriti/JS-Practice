// for of

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num)
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each character is: ${greet}`)
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United State of America');
map.set('Fr', 'France');
map.set('IN', 'India'); //Map won't show India again as it doese not support repeated values, it shows only UNIQUE values

console.log(map)
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

for (const [key, value] of map) { //[key, value] it destructure the Key-value pair and consider it separately
    console.log(key, ':-', 'value')
}

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', 'value')
// }

//this way using forof we can not iterate Object