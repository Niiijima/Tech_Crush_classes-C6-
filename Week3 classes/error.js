//error handling: try, catch and finally
//common types; syntaxerror(when you made a typo or forgot something like a bracket), referenceError(found when a variable does not exist), TypeError(when you used a value the wrong way)

//syntax error
// let add = (a, b) => {   


//reference error
//myame = "queen"
//console.log myname


//typeerror
let age = 25
console.log(age.toUpperCase())  //this will give a type error because toUpperCase is a method for strings not numbers


//handling errors with try catch
//try catch: it lets your program handle errors gracefully, instead of crashing. JS runs your "backup plan" inside the catch block. the try black holds the code, the catch block will run is the error happens
try{
    //this code might throw an error
    let result = 10 / 0;
    console.log(result)
    undefinedFunction();  //this will throw a reference error, but the program will not crash because we are handling it with try catch. undefined function causes error because it is not defined anywhere in the code
    console.log("This will not be executed"); //because the code broke in the undefinedFunction() line, this line will not be executed, but the program will continue to run because we are handling the error with try catch   
}catch(error){
    // this code runs if an error occurs in the try block
    console.error("An error occurred:", + error.name , error.message); // error.name and error.message will show the type error and where it is coming from
}
 
console.log("Program continues...")  //this will still run even after the error because we are handling it with try catch


//try and catch for type error
try{
    let age = 25
    console.log(age.length())

}catch(error){
    console.log("An error occored" + error.name , error.message);
}

//the error object inside the catch block: we have error.name(this gives the name of the error), error.message(gives the error explanation), error.stack(this shows the line the error occured and the call stack leading to it)
//try catch finally: the finally block is optional, it will run regardless of whether an error occurred or not. it is often used for cleanup code that needs to run no matter what, such as closing a file or releasing resources. if there is a return statement in the try or catch block, the finally block will still execute before the function returns. if there is an error in the finally block, it will override any previous errors or return values from the try or catch blocks.it is used for cleanup tasks like closing a connection or releasing resources, ensuring that certain code runs regardless of whether an error occurred or not.
//try = attempt it catch = handle the error finally = always run this code
function loadUserData(userId) {
    try{
        if (!userId.startsWith("Bad")) {
            throw new Error("Invalid user with BAD");  //this is how to throw an error, you can create your own custom error message
        }
        console.log("Data loaded for usder: " + userId)

    }catch(error){
        console.log("Failed to load user data: " + error.message);
    }finally {
        console.log("Loading complete. Closing connection."); //always runs
    }
}

    loadUserData("Bad-1234");