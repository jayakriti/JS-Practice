const myNums = [1, 2, 3]

const myTotal = myNums.reduce( function(acc, currval) {
    console.log(`acc value: ${acc} and Current value: ${currval}`);
    return acc + currval;
}, 0 )

console.log("Total value after REDUCE() is: ", myTotal)

//Usiing ARROW Function
const myTotal1 = myNums.reduce( (acc, currval) => (acc + currval), 0 )
console.log("Total1 value after REDUCE() is: ", myTotal)

// SHOPPING CART EXAMPLE

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "PY Course",
        price: 999
    },
    {
        itemName: "Mobil;e Development Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    }
]

const myCartTotal = shoppingCart.reduce( (acc, item) => (acc + item.price), 0 )
console.log(`Total Cart Value is: ${myCartTotal}`)