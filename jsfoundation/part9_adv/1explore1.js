// console.log("sarthak");

// for (let index = 0; index < 11; index++) {
//   console.log(index);
// }
// So this is the normal flow they run line by line this is nothing but regular code or synchronous code

console.log("sarthak");

function sayHello() {
  console.log("I would like to say HELLO");
}
// Now consider I have a function named sayHello() but I don't want to call it right after lets say I want to call it after some time or I want to provide a delay then we use timer method, an example for this is in a website after sometime we get a popup of a sale or so there timer method is used that I want to execute this function after sometime

setTimeout(() => {
  // Here you can write whatever you want and execute
  sayHello();
}, 4000); // This is 4 seconds

for (let index = 0; index < 11; index++) {
  console.log(index);
}
// So in the output the function sayHello() got called after 4 seconds, but this is not the sequence I expected, I expected first consolelog of sarthak and then the 4 sec timeout call of sayHello() and then the for loop but in the output the function sayHello() gets executed at the last ofc additional time after 4 sec, THIS IS THE ASYNC BEHAVIOUR OF JS

// JS has no capability to run the network calls, infact js doen't even have th ecapability to run most of the timer fns aswell
// I have booked in a lecture no 65 which explains the mechanism of event loop and in all the async behaviour of js
