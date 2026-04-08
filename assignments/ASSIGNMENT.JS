// Online Bookstore Order

// Task 1: Create Variables
let customerName = "Queen";
let customerAge = 21;
let bookTitle = "Pride and Prejudice";
let bookPrice = 5000;
let bookQuantity = 24;
let isStudent = true;

// Task 2: Arithmetic Operators
let totalCost = bookPrice * bookQuantity;

// Task 3: Comparison Operators
let isCustomerOld = customerAge >= 13;
let isBuyingManyBooks = bookQuantity > 4;
let isPriceOfBook = bookPrice === 5000;

// Task 4: Non-Primitive Data Type (Object)
const customerOrder = {
  customerName: customerName,
  bookTitle: bookTitle,
  bookQuantity: bookQuantity,
  totalCost: totalCost
};

// Task 5: Output Results
console.log("Customer Name: " + customerName);
console.log("Book Title: " + bookTitle);
console.log("Total Cost: " + totalCost);
console.log("Is customer an adult? " + isCustomerOld);
console.log("Buying more than 3 books? " + isBuyingManyBooks);
console.log("Is book price 5000? " + isPriceOfBook);
console.log(customerOrder);