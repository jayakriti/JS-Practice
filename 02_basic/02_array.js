const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

marvel_heros.push(dc_heros); //It put entire array as single element into the mentioned array

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const marvel_heros1 = ["Thor", "Ironman", "Spiderman"];
const dc_heros1 = ["Superman", "Flash", "Batman"];

const allHeros = marvel_heros1.concat(dc_heros1);
console.log(allHeros);

const all_new_heros = [...marvel_heros1, ...dc_heros1]; //spread operator(...) also adds multiple array and returns new array
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity); // idoly we should always give numeric value as depth instead of infinity like 2 or 3 or ...
console.log(real_another_array);


console.log(Array.isArray("Jaya"));
console.log(Array.from("Jaya"));
console.log(Array.from({name: "Jaya"})); // In this case of OBJECT, we need to tell which part has to be converted into ARRAY, key or value. Else it will always relult in empty array if it fails to create the array
console.log("=>  ", Array.from([1, 2, 3], (x) => (2 * x)))


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));