/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let z = 0; z < teas.length; z++) {
  if (teas[z] === "chai") {
    break;
  }
  selectedTeas.push(teas[z]);
}
// console.log(selectedTeas);

/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let t = 0; t < cities.length; t++) {
  if (cities[t] === "Paris") {
    continue;
  }
  visitedCities.push(cities[t]);
}
// console.log(visitedCities);

/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  // if (numbers[num] == 4) {
  //   break;
  // }
  // smallNumbers.push(numbers[num]);
  // varcha code chukla karan ithe num ha direct element ch hoto jasa python madhe asta na tasah, ki ha num pratyek element chi value assign karto svatala pratyek iteration madhe, so yeah its wrong he kahi indice nahiye. for sathi apan let i=0 i++.. karto tevha i la apan indice kiva element position mhanun gheto pan ithe num mhanje direct elementch asto
  if (num == 4) {
    break;
  }
  smallNumbers.push(num);
}
// console.log(smallNumbers);

/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/

let teatypes = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of teatypes) {
  if (tea == "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}
// console.log(preferredTeas);

/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

*/

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
// console.log(Object.keys(citiesPopulation)); to get keys
// console.log(Object.values(citiesPopulation)); to get values

let cityPopulations = {};

for (const key in citiesPopulation) {
  if (key == "Berlin") {
    break;
  }

  cityPopulations[key] = citiesPopulation[key];
}
// console.log(cityPopulations);

/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};

*/

let worldCities = {
  Sydney: 2900000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

let largeCities = [];

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
// console.log(largeCities);

/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/
// for each mhanje pratyek element var ek function/functionality perform karaychi ahe aplyala
let anotherteatypes = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
// array.forEach(function(element){

// }); another way of writing function, this is the calssic way and down one is an arrow function
anotherteatypes.forEach((element) => {
  if (element == "chai") {
    return;
  }
  availableTeas.push(element);
});
// console.log(availableTeas);
// que chukicha ahe karan apan stop nahi hote continue kartoy so ofc oolong tea pan print honare

/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

let againcities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

againcities.forEach((city) => {
  if (city == "Sydney") {
    return;
  }
  traveledCities.push(city);
});
// console.log(traveledCities);

/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/

let numarray = [2, 5, 7, 9];
let doubledNumbers = [];

for (let h = 0; h < numarray.length; h++) {
  if (numarray[h] == 7) {
    continue;
  }
  doubledNumbers.push(numarray[h] * 2);
}
// console.log(doubledNumbers);

/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

let teaslist = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of teaslist) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
