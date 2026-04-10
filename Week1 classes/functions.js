//functions are blocks of codes that performs a specific action and can be used multiple times
//function functionName(){
    //code to be executed}
function greet(){
    console.log("You are welcome to my terminal")
}

//after declaring a function youd have to call it for it to be used

greet() //this is how to call a function


//functions with parameters
let myName = "Queen"
function Farewell(name){   //name is the parameter here
    console.log("Sayonara" + name)
}
Farewell("Queen") //queen is the argument

//parameters are exepcted values, arguments are the values themselves 


//functions with numbers
let x = 6
let y = 10
console.log(x * y)

//static function
function multiply (){
    let a = 6
    let b = 10
    return a * b
}
console.log(multiply())

//dynamic function
function multiply(a , b){
    return a * b
}
console.log(multiply(8, 12))
//return keyword is used to give the output of functions
//you can have multiple console.log in your functiion but your return statement must be the last one in your statement
//ifthere is no return statement in your function, you dont need to decleare your console.log outside your function

function isAdult(age){
    return age >= 18
}
console.log(isAdult(20))
console.log(isadult(16))
