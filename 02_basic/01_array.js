const myArr = [0, 1, 2, 3, 4, 5]; // numeric value array
const myHeros = ["abc", "def", "ghi"]; //string value array

const myArr1 = new Array(1, 2, 3, 4, 5); //declaring array in object format

console.log(myArr[1]);

// ``````````````````````````````ARRAY METHODS`````````````````````````````` //

myArr.push(6);
myArr.push(7);
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(9); // not prefered to use much as it inseart in the begining and make all the elements index value change
console.log(myArr);
myArr.shift(); // ity remove the 1st element 
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.includes(3));
console.log(myArr.indexOf(4));

const newArray = myArr.join();
console.log(myArr);
console.log(newArray);
console.log(typeof myArr, typeof newArray);

// SLICE(), SPLICE()

const newArr1 = myArr.slice(1,3);  //myArr = [0, 1, 2, 3, 4, 5];
console.log(newArr1);
console.log("A ", myArr);

const newArr2 = myArr.splice(1,3);
console.log(newArr2);
console.log("B ", myArr);