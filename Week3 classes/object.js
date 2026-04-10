//object it is a collection of related data stored as key-value pairs. it is wrapped in curly braces{}, each entry is a key-value pair, the key is the variable name and the value is the variable value, each key-value pair is separated by a comma, and it can contain different data types. it is used to represent real-world entities with multiple properties. it allows us to group related data together and access it using meaningful keys.  
let obj = {
    Name : "john",
    age : 30,
    city : "lagos",
    isStudent : true
}

//you can add new, and update existing properties in an object
obj.country = "nigeria"  //this is how to add a new property to an object
obj.age = 31  //this is how to update an existing property in an object
console.log(obj)


//the array method holds different values, like a list of items, while the object method is used to describe a real-world thing with multiple properties. the array method is ordered and accessed by index, while the object method is unordered and accessed by keys. the array method is best for collections of similar items, while the object method is best for representing entities with multiple attributes. 

//how do we access data in our object?. yous have to dot it or use the square brackets

//dot notation
console.log(obj.name)
//square bracket notation   
console.log(obj["age"])

//the dot notation is more concise and easier to read, while the square bracket notation is more flexible and allows you to access properties with special characters or spaces in their names. the dot notation is generally preferred for accessing properties in an object, while the square bracket notation is used when the property name is dynamic or contains special characters. 


//obj destructuring is a shortcut for pull out values from an obj and storing it in a seperate variable instead of writing the obj multiple times, you can extract them in one line
let employee = {
    name : "Jane",
    role : "Developer",
    salary : 50000,
    city : "New York"
}
let newName = employee.name
let newRole = employee.role
let newSalary = employee.salary

const {name , role , salary , city} = employee
console.log(name)
console.log(role)
console.log(salary)
console.log(city)

//objects can have similar names as long as it is confined to seperate curly brackets

//you can choose to rename while destructuring
let courses = {
    "CSC 401": "Data Structures",
    "CSC 402": "Algorithms",
    "CSC 403": "Operating Systems"
}
let {"CSC 401": CSC400} = courses 
console.log(CSC400)


let person = {
    name : "John",  
    opay : true,
}
let {opay: palmpay} = person
console.log(palmpay)

//the spread and rest operators: the both use three dots ()...) 
//the spread operator opens up an array or object and spread out its items. it adds items of an array or object into another one 
//the rest operator collects remaining items in a new array or object

//spread
let profile = { name: "Ada", age: 22};
let updatedProfile = { 
    ...profile,
    city: "Lagos",
}
console.log(updatedProfile)

//the rest operator
const { nombre, ...rest } = {
    nombre: "John",
    age: 30,
    city: "Lagos",
};
console.log(nombre);
console.log(rest);


//iterating over object. unlike arrays, objects do not have a direct index. here are 3 ways to loop through an object
//looping throug the for...of
//looping through object.keys
//looping through object.values
//looping through object.entries


const user = {
    name: "Jane",  //name is a key, jane is a value
    passward: "12345",
    isFeamale: true,
    city: "New York",
    age: 28,    
}

//using for ...in
for (let key in user ){
    console.log("these are the keys : " + key) //this will return the keys of the object
    console.log("these are the values : " + user[key]) //this will return the values of the object
}


//for...in is usedfor looping through the keys of an object and returns only the keys. the for...of is used to loop through the values of an object and returns only the values. object.entry returns the entries (both key and value)
//for...in can also return values by using this syntax; user[key], while for...of can only return values. for...in is generally used for iterating over the properties of an object, while for...of is used for iterating over iterable objects like arrays.

//object.entry
console.log(Object.entries(user)) //this will return an array of key-value pairs from the object

//object.keys
console.log(Object.keys(user)) //this will return an array of the keys of the object

//object.values
console.log(Object.values(user)) //this will return an array of the values of the object
//object.key and values, returns the values in an arry. object.entries returns the key and value in an array of arrays. for...in returns the keys of the object, while for...of returns the values of the object. for...in is generally used for iterating over the properties of an object, while for...of is used for iterating (or looping) over iterable objects













//using for...of
for (let values in user){
    console.log("these are the values : " + user[values]    ) //this will return the values of the object
}
//for...of is used to loop through the values of an object and returns only the values. object.keys() is used to get an array of the keys of an object, while object.values() is used to get an array of the values of an object. object.entries() is used to get an array of key-value pairs from an object.
