/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/

let sum = 0;
let i = 1;
while (i <= 5) {
  sum = sum + i;
  i++;
}
// console.log(sum);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

let countdown = [];
let j = 5;
while (j > 0) {
  countdown.push(j);
  j--;
}
// console.log(countdown);

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/
//do while loop ekda startig la ekda run honya sathi vaparla jata. mhanje condition na check karta loop cha content print karna starting la ekdach. magh nantar baher padlyavar condition check keli jati. Ata ithe do loop chya aat if vaparla ahe so tasahi condition ahech mhanje jar me starting lach stop lihla ki code runch honar nahi. butmostly do while loop ekda starting chi conditon run hoila havi tya sathi vapartat. Ata prompt he fakt browser varach chalta
let teaCollection = [];
let tea;

// do {
//   tea = prompt(`Enter your favorite tea(type "stop" to finish)`);

//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/
let total = 0;
let s = 1;

do {
  total += s;
  s++;
} while (s <= 3);
// console.log(total);

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

let multipliedNumbers = [];
let numbers = [2, 4, 6];

for (let s = 0; s < numbers.length; s++) {
  //2 ways ahet he karayla
  // takeNumber = numbers[s] * 2; (1st way)
  // multipliedNumbers.push(takeNumber);

  multipliedNumbers.push(numbers[s] * 2); // (2nd way)
}
// console.log(multipliedNumbers);

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/
let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let m = 0; m < cities.length; m++) {
  // again2 ways ahet he karayla
  // const myCity = cities[m] (1st way)
  // cityList.push(myCity);

  cityList.push(cities[m]); // (2nd way)
}
// console.log(cityList);
