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

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_another_array = another_array.flat(infinity);
// console.log(real_another_array);