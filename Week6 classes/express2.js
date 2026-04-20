//your app.get can be written as app.get("/about" , (request , response) =>{
   // response.send("This is the about page"
   //})
//this shows the about page. to run it on your browser run localhost:3000/about
//you can also use app.post to post data to the server. for example:
//app.post("/submit" , (request , response) =>{
   // let data = request.body; // this will get the data sent from the client
   // response.send("Data received: " + JSON.stringify(data)); // this will send a response back to the client
//})
//const express = require("express");
//const app = express();
//const port = 3000;

//app.use(express.json()); // this will allow us to parse JSON data sent from the client


//json data is an array of objects. for example:
//[
//   {  "name": "John", "age": 30},
//   {  "name": "Jane", "age": 25}
//]
 
