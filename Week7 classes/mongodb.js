//mongodb is a nosql database that stores data in a flxible, JSON-like format called BSON (Binary JSON). Mongodb doesnt use structured database with rows and columns making it super flexible
//it is used because it is flexible since it doesnt need a schema(structure), it is also designed to handle large amount of data and allows the addition of more servers as your application grows. 
//data is stored in collections which consists of documents. a collection is a group of documents  like an array
//database is a collection of related data
//a combination of collections, makes up a database (document > collections > database)

//adding a mongodb database to web application (MVC architecture)
//mongoose is the connector between the database and server. it helps make the process of communicating with your database easier since it helps you connect to your database from your server
//mvc (MODEL VIEW CONTROLLER); it ensures a clear seperation of concerns, making application modular, maintainable and scalabe (eg user registration system). it splits your web application into three parts (model(manages user data like name and email), controller (processes registration logic), view (dispays the registration form or the result)) it just breaks your application into smaller bits

