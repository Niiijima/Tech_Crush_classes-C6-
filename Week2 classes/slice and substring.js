//slic and substrings are used to extract a part of a string and return it as a new string, without modifying the original string
let text = "Hello World"
let slicedtext = text.slice(0, 5) //the first number specifies where the slice to start and the end number shows where it should end
let substringtext = text.substring(0, 4)
console.log(slicedtext)
console.log(substringtext)
//if there is no second parameter(numbet) the slice will stop where the string stops

//the difference between substring and slice is in the negative number. for slice if given a negative number it will start slicing from behind, the sunstring treats all negative numbers as 0.

//replace and replace all
//replace swaps out texts in a string with a new text, it swaps out the first match it sees
//replace all replaces all the matches in a string with a new text
let sentence = "I love JavaScript. JavaScript is my favourite programming language"
let newSentence = sentence.replace("Javascript", "Python")
let newSentenceAll = sentence.replaceAll("Javascript", Python)
console.log(newSentence)
console.log(newSentenceAll)

//replace and replaceall methods takes two parametres, the first is the name you want to replace while the second parameter is the text you your old parameter to be

//evaluation
let message = "HELLO, WORLD! ";
//remove the while space 
let trimmedMessage = message.trim();
console.log(trimmedMessage);

//check if it satrts with HELLO
let startWithHello =
   trimmedMessage.startsWith("HELLO")
   console.log(startWithHello);

//check if it ends with WORLD
let endWithWorld = trimmedMessage.endsWith("WORLD!")
console.log(endWithWorld);

//convert to lowercase
let lowercaseMessage = trimmedMessage.toLowerCase();
console.log(lowercaseMessage);

//find position of WORLD
console.log(trimmedMessage.indexOf("WORLD!"))

//replace WORLD  with Nigeria
let newMessgae = trimmedMessage.replace("WORLD", "Nigeria")
console.log(newMessgae)

//replace all L with 1
let newMessageAll = trimmedMessage.replaceAll("L", "1")
console.log(newMessageAll)

//get characters from position 3 to 8
let slicedMessage = trimmedMessage.slice(3, 8);


//split breaks a tring into arry of similar strings by cutting it wherever it finds the seperator you give it
let sentence2 = "LANGUAGES: JavaScript, Python, Java, C++"
let splittedSentence = sentence2.split(",") //the seperator is a space, so it will cut the string at every space and return an array of the words in the string
console.log(splittedSentence)
//the split method takes a string as its parameter and the return data type is an array


//more examples on the string methods
//substring and slice
let str = "Coding is fun"
//extract the word "coding"
let slicedStr = str.slice(0, 6)
console.log(slicedStr)
//to use substring
let substringStr = str.substring(10, 13)
console.log(substringStr)

//lets extract is using slice()
let slicedstr2 = str.slice(7, 9)
console.log(slicedstr2)

// pravtising split method
const color = "red, green, blue, yellow"
//split inyo an array cof comma
const comma = color.split(",")
console.log(comma)

//join with -
const joined = comma.join(" - ")
console.log(joined)


//split
const url = "/api/v1/users";
//splict by slash
const slash = url.split("/")
console.log(slash)
//get v1 using split and index
console.log(slash[2])
or 
const v1Index = slash[2]
console.log(v1Index)

//the mix method
const email = "test@school.edu"


//assignment

 