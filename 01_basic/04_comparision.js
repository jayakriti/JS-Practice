console.log(2>1, 2>=1, 2<1, 2==1, 2!=1);

console.log("2" > 1, "02" > 1);

console.log(null > 0);
console.log(null == 0); //In equality check no conversion will happen with null
console.log(null >= 0); //In this case(comparision) null value is getting converted to 0 so it is = to 0

console.log("2" == 2); //It checks only for value
console.log("2" === 2); //It checks the value as well as data type