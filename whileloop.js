let tries = 0
while(tries <3){
    console.log(tries + 1)
    tries++
}

let count = 3
while (count > 0){
    console.log(count)
    count--
}
console.log("Happy New Year!")

//assignment1 give a well detailed difference between the while loop and for loop with code examples
let age = 18
while (age < 18){
    console.log("you are not eligible")
    age++
}


//push, pop, shift, unshift, 
let colors = ["red", "blue", "green"]   
colors.push("yellow")  //the push method() adds to the end of the array

let lastColor = colors.pop();
console.log(lastColor)  //this takes away the last element in that array


let firstColor = colors.shift();
console.log(colors); //the shift method removes the first element of the array
console.log(firstColor);  //this takes away the first element in that array


//the unshift method adds to the beginning of the array
let newLength = colors.unshift("purple");
 //this returns the new length of the array after adding the new element to the beginning of the array
console.log(colors);
console.log(newLength);

//the return type for unshift and push are new legnth of the array which are numbers
//the return type for pop and shift are the removed element which are strings in this case  



//the object() method, it is a collection of related data stored as key value pairs. think of it as a way to describe a real world thing with multiple properties. the key is the variable name and the value is the variable value

