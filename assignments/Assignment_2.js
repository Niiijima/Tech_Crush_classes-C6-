//SECOND ASSIGNMENT: ARRAY METHODS forEach(), map() and filter()    

//forEach()
const numbers = [2, 4, 6, 8, 10]
//print each number multiplied by 2
numbers.forEach(function(number){
    console.log(number * 2)
})


const names2 = ["Esther", "John", "Ada", "Mike"]
//print out hello and the name using forEach()
names2.forEach(function(name){
    console.log("Hello " + name)
})



//using map()
const numbers2 = [1, 2, 3, 4, 5]    
//create a new array where each number is squared 
let squaredNumbers = numbers2.map(function(number){
    return number * number
})
console.log(squaredNumbers) 

const prices2 = [100,200, 300]
//create an array where each price is discounted by 10%
let discountedPrices = prices2.map(function(price){ 
    return price * 0.9
})
console.log(discountedPrices)


//using filter()
const numbers3 = [5, 12, 8, 20, 3]
//create a new array with numbers greater than 10
let filteredNumbers = numbers3.filter(function(number){
    return number > 10
})
console.log(filteredNumbers)    


const ages = [15, 22, 17, 30, 18]
//return ages that are 18 and above 
let adultAges = ages.filter(function(age){
    return age >= 18
})
console.log(adultAges)




//bonus question
const numbers4 = [10, 15, 20, 25, 30]
//first use filter to get numbers greater than 20 and the use maps to double the remaining numbers  
let filteredAndMappedNumbers = numbers4.filter(function(number){
    return number > 20
}).map(function(number){
    return number * 2
})
console.log(filteredAndMappedNumbers)   