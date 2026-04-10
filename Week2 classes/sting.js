//length of a string
//.length is a property that returns the length of a string
let stringText = "Hello World"
console.log(stringText.length)
let capitalLetter = stringText.toUpperCase()
let lowercaseLetter = stringText.toLowerCase()
console.log(capitalLetter)
console.log(lowercaseLetter)
//to uppercase and lowercase of letters in a string
let identity = "queen"
console.log(identity.toUpperCase())
console.log(identity.toLowerCase())

let str = " Hello World! "
let timmedStr = str.trim() //removng both start and end
let frontTrimmedStr = str.trimStart() //removing the start and not the end
let backTrimmedStr = str.trimEnd() //removing only the end and not the start
console.log(timmedStr)
console.log(frontTrimmedStr)
console.log(backTrimmedStr)
//trim is used to remove whitespace from both ends of a string, trimStart is used to remove whitespace from the start of a string, trimEnd is used to remove whitespace from the end of a string



let signupName = " Queen"
let signinName = "Queen"

if(signupName=== signginName){
    console.log("Welcome bacck")
}else{
    console.log("Invalid username")
}

//signupname and signinname are not the same because of the whitespace before the letter q in signinmae. to avoid this add the code like this

if((signupName.trim()) === signinName){
    console.log("Welcome back")
}else{
    console.log("Invalid username")
}

//indextOf() is used to return the index of the first match 

let userEmail = "Q@ueen@gmail.com"
let emailIndex = userEmail.indexOf("@")
console.log(emailIndex)

//includes returns true or false
let emailContainsAt = userEmail.includes("@")
console.log(emailContainsAt)


//startwith() is used to check if  a string starts with what you are using to search while endswith shows if what you are searching ends with what you are using to search. it returns true or fale
let userName = "TechCrush Queen 6"
let starts = userName.startsWith("TechCrush")
console.log(starts)

let ends = userName.endsWith("6")
console.log(ends)