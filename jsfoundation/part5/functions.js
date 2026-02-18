// Memory : https://youtu.be/7gwc-1czolw?si=yT0jL7Un9dyOZx4b
// Parameter is a placeholder where we pust variables and Argument is the actual value or data
/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/

function makeTea(typeOfTea) {
  // console.log(teaOrTea(typeOfTea)
  return `Making ${typeOfTea}`;
  console.log("HI");
}
let teaOrder = makeTea("green tea");

/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/

/* 
ata ek concept ahe exectution context mhanun ti concept ithe explain karelach me but best explanation hava asel kiva kahi doubt asel tar tya course(udemy hites choudhary web dec) cha video 53 Function, arrow function, THIS and context in javascript, lecture stamp 14:56 - 16:52 bagh

 Now in 41th line we are calling the function orderTea("green tea"). When we call a function then that function has to exectue the lines of code/ computations. Whenever a function is called to be executed it creates a safe zone / working table / EXECUTION CONTEXT(execution context is the appropriate word here but just for the sake of explanation I can use different terms).
 The function executes the block of code in that exectution context. Now then orderTea is called and it executes everything(there is not much of exectuion in this function but for a general function example explanation there will be a chunk of code for execution) and lastly it has to retun another function which is confrimOrder().
 Now this function again creates another execution context for itself. Now again after executing all the computations it returns a statement. Now as soon as all the execution is done and something is returned the function and the execution context vanishes and it pushes out the return expression(in this example its returning a statement `Order confirmed for ${teaType}`).
 So now all the work of the function confirmOrder() is done it vanishes and pushes out the return statement thus, its work is done. Here only the statment is present there is no trace of this function
 Now after this all the exectuion of computations is done by the function orderTea() and its last job is to return the function confirmOrder() thus ultimately to return the statement.
 Now again the exectuion context and the funtion vanishes and the statement is pushed out
 Thus the function orderTea() vanishes and it pushes out the statement
 Thus atlast we get the statement Order confirmed for ${teaType}. This is what is exectued and this is the concept of execution context
*/

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}`;
  }
  // confirmOrder so he kay asta he asta reference, jevha apan function la without brackets call karto tyala apan reference mhanto
  // confirmOrder() ani he jevha function la bracket ne call karto tevha apan function execute karto, so this is the diff
  return confirmOrder();
}

let orderConfirmation = orderTea("green tea");
// console.log(orderConfirmation);

/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/

const calculateTotal = (price, quantity) => {
  return price * quantity;
};
let totalCost = calculateTotal(2000, 50);
// console.log(totalCost);
// arrow function madhe kahitar 'this context' ek concept ahe ata kalla nahi pan baghu nantar

// Now the if the arrow function only has one line of code, we can write it in a different way :
// const calculateTotal = (price, quantity) => price * quantity;
// In this case we have to just shift the code in one line, remove the curly braces and there is no need of return thus remove return too. This return is called an IMPLICIT RETURN
//foreach() is also an example of higher order function. For ex :
// anotherteatypes.forEach(function(element) {
//   if (element == "chai") {
//     return;
//   }
//   availableTeas.push(element);
// });
//  here foreach() is a method which is accepting furteher a funtion

/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/

/*
ata haycha explaanation pan parat milnarach ahe but jar nahi kall tar couse madhe video 54. Higher order function and nested functions in javascript time stamp 5:31-7:52 bagh
First of all processTeaOrder is being called in the line 99. The control of the line 99 is passed on to 95 as ofc function processTeaOrder is being called.
Now again makeTea is been passed on as a paramter which is teaFunction ie makeTea becomes teaFunction(now teaFunction is just a placeholder. processTeaOrder is not an ordinary function, we think that makeTea is being passed as an argument, but this is not an ordinary argument, we are litireally passing a function so ultimately that is not an argument in the end makeTea is being passed as a parameter as teaFunction)
Now inside processTeaOrder another function is called that is teaFunction but as I said ultimately makeTea function is being returned/ called and earl grey. argument is being passed. So again typeOfTea becomes earl grey and rest all we know
teaFunction is a just placeholder like a nickname buut the real name is makeTea

geeksforgeeks docs : 
A higher-order function is a function that does one of the following:

. Takes another function as an argument.
. Returns another function as its result.

in the below example as said : 
. processTeaOrder is a higher-order function because it takes another function makeTea as an argument.
. It calls the makeTea function once
*/

function makeTea(typeOfTea) {
  return `makeTea : ${typeOfTea}`;
}

function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

let order = processTeaOrder(makeTea);
// console.log(order);

/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/

// Basic basic concept behind this example is :
// The createTeaMaker returns a function / function defination and as we saw earlier about execution context thus the createTeaMaker vanishes and just another function defination is returned,so so so in 117 line the teameker is not a ordinary variable as createTeaMaker returned a function defination teaMaker is holding a function defination and thus whoever is holding a function defination can be executed, tus an argument nees to be passed for inner function which is passed by teaMaker
// In all teaMaker = createTeaMaker() --> teaMaker = function(teaType) -->(after this we again asign teaMekr to another var ie result) result = teaMaker("green tea"). Thus teaMaker is not an ordinary var and result is an ordinary var

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}

let teaMaker = createTeaMaker();
let result = teaMaker("green tea");
console.log(result);

// function createTeaMaker(name) {
//   let score = 1000;
//   return function (teaType) {
//     return `Making ${teaType} ${name} ${score}`;
//   };
// }

// let teaMaker = createTeaMaker("sarthak");
// let result = teaMaker("green tea");
// console.log(result);
// Ithe evdhach dakhvaychay ki ki jevha name ha parameter pass karto createTeaMaker hya function madhe tevha tyacha access atlya function kadhe pan asto same for score var too. this concept is closure
// Closure is a feature in JavaScript where an inner function remembers and can access variables from its outer function’s scope, even after the outer function has returned.
// Scope type	Explanation
// Global scope	Variables declared outside all functions
// Local scope	Variables declared inside a function
// Closure	When an inner function accesses outer function’s local variables
//Global Scope
//  └── createTeaMaker Scope
//       ├── name
//       ├── score
//       └── inner function
//             └── teaType
// for more info visit this chatgpt chat : https://chatgpt.com/share/695eb590-d724-8004-b84f-553e845a449e
