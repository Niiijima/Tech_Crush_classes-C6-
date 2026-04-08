//using the map method, create a new array where each number is doubled
const numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(function(number){
    return number * 2
})
console.log(doubledNumbers)


//return scores greater than or equal to 300
const scores = [250, 300, 150, 400, 200];
let highScores = scores.filter(function(score){
    return score >= 300
})
console.log(highScores)

//get the sum of all items in the array
const sum = [2000, 3000, 400, 100, 600]
let total = sum.reduce(function(runningTotal, currentValue){
    return runningTotal + currentValue
}, 0)  
console.log(total)

// add green to the end of the array and remove red from the array
const colors = ["blue", "yellow", "red"]
colors.push("green")  
console.log(colors)   
let removedColor = colors.splice(colors.indexOf("red"), 1)
console.log(colors)  
console.log(removedColor)  


