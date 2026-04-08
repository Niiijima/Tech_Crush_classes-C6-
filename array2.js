//using the find() method; this find the first item in the array that matches a condition, if nothing is found, it returns undefined, unlike filter, it stopes after finding the first match
const studnetsNames = ["john", "jane", "doe", "john"] 
const found = studnetsNames.find((name)=>{
    return name === "john"
})
console.log(found)

// the reduce() method it boils an entire array down into a single value, it is great for getting total, sums and calculations
let cartPrices = [1500, 800, 2200, 450, 1000]
let total = cartPrices.reduce(function(runningTotal, currentPrice) {  //the reduce method requires two parameters, in this code they are runningTotal and currentPrice 
    return runningTotal + currentPrice;
}, 0)  //0 is the starting value or the first accumulator

console.log(total);



//using the arrow function
let grandTotal = cartPrices.reduce((acc, price) => acc + price, 0);
console.log(grandTotal);


//instead of runningTotal you can use acc (accumulator) like i did in the arrow function example
