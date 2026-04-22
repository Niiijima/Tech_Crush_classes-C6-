//http methods tell the server what action to perform on a resource. REST APIs use different methods to represent different operations, following the CRUD pattern ( create, read, update and delete). ie it tells the server 
//CRUD is the same thing as the http methods 
//we have 4 main method of http (GET: it reads/retrives data or resources, POST: this creates new resources. it sends in the request body, it pays out in the signing up for the first time ; PUT; this updates/replace an entire resource (eg update user profile) (it is similar to PATH method but the PATH method updates a single resource while PUT updates all) DELETE: this removes resources)
//the header of a website (containing the url and co): like GET but returns only headers, not the body. It us ysed to check if a resource exist
//OPTIONS: it asks the server what methods are allowedd for a given URL
//PATCH: partially updates a resource - sends only the fields that changed 

//install postman

//using the app.get to retrieve data 
//eg of app.get to retrieve data
//simulated in memory database of users
//const users = [
//    { id: 1, name: 'Alice', email: 'alice@example.com' },
//    { id: 2, name: 'Bob', email: 'bob@example.com' }
//];
//GET all users
//app.get(`/users`, (req, res) => {
//    res.status(200).json(users);
//});
//to GET a single user by ID
//app.checkout(`/user/:id`, (req, res) => {
//    const id = parseInt(req.params.id);  //params means parameters, //parseInt converts the id from a string to an integer(number)
//    const user = users.find(el => el.id === id); //find the user with the matching ID. el means element from the constId
//    //el => el.id === id means that if the element i write in my browser is equal to the id of the user in the users array, then return that user
//    if (!user) {
//        return res.status(404).json({ error: 'User not found' });
//    }
//    //this means if the element is not found, return a 404 status code with an error message in JSON format. The return statement is used to exit the function early if the user is not found, preventing the rest of the code from executing.
//    res.status(200).json(user)
//});




//the backtic (`) allows you to imbeb the js variable and functions into strings 
//eg
// constant name = "Queen";
// you can use `my name is ${name}` 
// instead of "My name is " + name

//there are general get(it retrieves all the data in that array), and single get (it retrieves specified data)
 

//there are two types of routes; static and dynamic. by default, all your routes are static unless you make the dynamic. Dynamic route retrives information you want and you place it after a column    
//Static Routes

//A static route has a fixed, predefined path. It does not change and does not accept parameters.

//Examples:

//home
//about
//contact

//Characteristics:
//Hardcoded URLs
//Same content every time
//Simple to implement
//No dynamic data in the path
//<Route path="/about" element={<About />} />

//A dynamic route includes variables (parameters) in the URL, allowing the route to change based on input.
//Examples:
//user/1
//user/42
//product/abc123