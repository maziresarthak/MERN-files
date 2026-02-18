// This is just an example of the course but if you want better examples and explanatation just go to th previous prototype file
function Person(name) {
  this.name = name;
}

// Lets create a greet method in Person() function
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let sarthak = new Person("Sarthak");
sarthak.greet();
// The ability to actually inject a function that mean I am capable of doing prototypal inheritance here and also access ths.name
// The whole idea in js is object inherit properties from other object via prototype chain
