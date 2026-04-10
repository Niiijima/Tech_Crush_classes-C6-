//if-else statements
let userAge = 25
if (userAge >= 18){
    console.log("You are welcome to our channel")
}else {
    console.log("Sorry, you dont meet our age requirement")
}

let gender = "female"
if (gender ==="female"){
    console.log("You are welcome to the ladies section")
}else if (gender === "male"){
    console.log("You are welcome to the male section")
}else if (gender === "others"){
    console.log("You are welcome to the other section")
}else if (gender === "none"){
    console.log("We dont know where you belong")
}


let username = "Queen"
let password = "12345"
if (username === "Queen" && password === "12345"){
    console.log("Login Successful")
}else if (username === "Queen" || password === "12345"){
    console.log("Username or password incorrect")
}else {
    console.log("login failed")
}






let age = 18
if (age >= 18){
    console.log("you are elegible to vote")
}else if (age <18){
    console.log("you are not elegible to vote")
}