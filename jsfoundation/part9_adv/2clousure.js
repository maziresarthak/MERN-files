// CLOSURE ARE FUNCTIONS that they remember the environment in which they are created which means that function can retain the variables which are declared outside of it

// If you define any inner function inside it that will remeber everything that you are creating inside
function outer() {
  let counter = 4;
  return function () {
    // As we studied that each function has its block of code where it can access the things but turns out when these functions and inside the functions are been created they can access outer var too and this is your clousure
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment()); // When I am executing increment() that means I am executing inner function whose defination is hold by increment and thats whu increment() with bracket
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
// It still remembers the memory, it never forgerts whats the updated value
// So clousure : That function, there are special type of functions in which if any function is created it actually retains the memory of the function
