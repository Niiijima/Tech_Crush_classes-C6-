//JavaScript Fundamentals 1
//Array and Array Methods: an array is a variable that can hold many values at the same time, stored in a single ordered list. it is enclosed in a square bracket, it can contain different data types or different data types. they are seperated with commas, and it starts couting from 0
let item1 = "milk"
let item2 = "bread"
let item3 = "eggs"
let shoppingList = [milk, bread, eggs]

//each item in an array has an index (position) and it begins with 0
console.log(shoppingList[0])
//to get the length, for length it starts from 1 and not 0 like index position
console.log(shoppingList.length)

//there are 2 levels of array methods
//assignment:differences between higher order array methods and array methods


//forEach() method: it runs a function for each element in the array, it does not return a new array, it is used to perform side effects (like logging or modifying external variables) and it does not change the original array
let fruits = ["apple", "banana", "orange", "mango"]
fruits.forEach(function(fruits){
    console.log("i eat " + fruits)
})

let names = ["john", "jane", "doe"]
names.forEach(function(name){   //using the named function
    console.log("tech crush " + name)
})

//map() method: it creates a new array by applying a function to each element of the original array, it returns a new array with the results of calling a provided function on every element in the calling array, it does not change the original array
let scores = [80, 90, 70, 85]   
let newScores = scores.map( score => score + 5)  //using the arrow function
console.log(newScores)

//using the named function
let gardes = [70, 85, 90, 60]   
let newGrades = gardes.map( score => {
    console.log("as a good teacher, i decided to add 5 marks to all my students")
    return score + 5
})
console.log(newGrades)

let students = ["john", "jane", "doe"]  
let nameTag = students.map( tag =>{
    return "Tech_crush_cohot_2026" + tag
})
console.log(nameTag)

function add(a, b){
    return a + b
}

for(let X = 0; X < students.length; X++){
    console.log("Tech_crush_cohot_2026" + students[X])  
}


//the filter() method: it creates a new array with all elements that pass the test implemented by the provided function, it returns a new array with all elements that satisfy the condition, it does not change the original array. it creates a new array containing only the items that pass a condition (that returns true). items that fail the condition are left out
let jambScores = [200, 250, 180, 300, 150]  
let passedScores = jambScores.filter ((score) => {
    return score >= 200
})
console.log(passedScores)

let age = [18, 25, 30, 15, 40]  
let adults = age.filter(function(age){
    if(age >= 18){
        return true
    }
})



