//substring and slice
const str = "Nigeria is awesome"
//extraxt the word Nigeria using sunstring()
let substringStr = str.substring(0, 7)
console.log(substringStr)

//extract "awesome" using slice()
let slicedStr = str.slice(11, 18)
console.log(slicedStr)

//extract "is" using slice()
let slicedstr2 = str.slice(8,10)
console.log(slicedstr2)

//using split

const names = "John,Jane,Doe"
//split using  comma
let splittedNames = names.split(",")
console.log(splittedNames)

//join with space
let joinedNames = splittedNames.join(" ")
console.log(joinedNames)

const path = "/user/home/docs"
//split by /
let splittedPath = path.split("/")
console.log(splittedPath)

//get home using split and index
console.log(splittedPath[2])

//mix
const email = "user@example.com"
//get username (user) using split()
let splittedEmail = email.split("@")
console.log(splittedEmail[0])

//check id its a .com domain using endsWith()
if(email.endsWith(".com")){
    console.log("This is a .com domain")
}

//replace @ with AT using replace()
let replaceName = email.replace("@", "AT")
console.log(replaceName)















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