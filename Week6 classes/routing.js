//routing us how an application responds to a client request to a particular end point (a URL/path) and a specific HTTP method (GET, POST, UPDATE, DELETE
//Post updates data to the server, update makes changes to already existing data, delete removes data from the server
//each route can have one or more handler functions, which are executed when the route is matched. the handler functions can perform any operations, such as accessing a database, processing data, or sending a response back to the client
//to define a route in express, you can use the app.METHOD() function, where METHOD is an HTTP method (GET, POST, etc.) and the path is the URL path for which the route is being defined. for example:
//to do app.get:  app.get("/about" , (request , response) =>{
   // response.send("This is the about page"
//})
//this shows the about page. to run it on your browser run localhost:3000/about     
//app.use() matcjes all http methods and is primarily used for middleware app.get 


//middleware is a function that has access to the request object(req) and response object(res). when the cycle is completed it either terminates it or moves oen to another middleware. it takes 3 parameters req, res and next.
//for example:
//app.use((req, res, next) => {
   // console.log("This is a middleware function");
   // next(); // this will move to the next middleware function
//})    


//types of middleware: apllication level, only used on the application (eg app.use() or app.METHOD()), router level: it works the same as the application level but is bound to an intance of an express.router()(ie it works for only the router), error handling; it takes in arguments(req,res,next) and handles error, built-in; they are built in functions from express.json, third part: installed via npm eg morgan for logging

//example of router level middleware:
//express.json() is a built in middleware function in express. it parses incoming requests with JSON payloads and is based on body-parser. it is used to parse the body of the request and make it available in the req.body property.
//express.urlencoded() is a built in middleware function in express. it parses incoming requests with urlencoded payloads and is based on body-parser. it is used to parse the body of the request and make it available in the req.body property. it is used for parsing form data.
//express.static() is a built in middleware function in express. it serves static files such as images, css files and javascript files. it is used to serve static files from a directory. for example: app.use(express.static("public")) will serve static files from the public directory. you can access the files in the public directory by going to localhost:3000/filename.extention

