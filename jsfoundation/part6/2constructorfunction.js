//  For consturctor function explanation : https://youtu.be/vxPOQPPsATQ?si=FJigww5CLPxre4sA
// For this keyword and context refer this yt video : https://youtu.be/9ksqBa8_txM?si=Q0dqXciPziPI6UB1 and https://youtu.be/ByhtOgF6uYM?si=h4Zvh6veIL_OZd6J
// For new keyword :
// The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
// The new keyword in JavaScript creates a new object instance from a constructor (a function or a class) and critically binds the value of the this keyword to that new object, rather than the global scope.
// The primary purpose of the new keyword is to facilitate object creation and initialization using constructor functions or classes. When used, it performs four main actions sequentially:
// Creates a New Object: A brand new, empty JavaScript object is created in memory.
// Links the Prototype: The new object's internal [[Prototype]] (accessible via __proto__) is linked to the constructor function's prototype property. This enables inheritance.
// Binds this: The newly created object is set as the this context for the duration of the constructor function's execution. This allows properties to be assigned to the new instance (e.g., this.property = value).
// Returns the Object: The new keyword implicitly returns the newly created and initialized object, unless the constructor function explicitly returns a non-primitive object itself.
// For further explanation of new keyword use docs mdn and google but actually above info itself is a mix of mdn docs and google

// As constructor function is also a function it is good to write tha name of constuctor function with first letter as capital so as to differentiate between normal and constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Maurti Suzuki", "Ritz");
// console.log(myCar);

let myNewCar = new Car("Tata", "Harrier");
// console.log(mynewCar)

// So basically this is used for context that this name or this age or this make or this model is in this context and it is present in this function block. So thats whu we assign name,age,make,model to this.name,this.age,this.mak,this.model saying that the name,age,etc are of this context and they are of this function. As soon as the context(what i mean by context is bacically data, the data is changing thus the context is changing in the constructor function) changes in the constructor function the name age also changes
// So whenever we are accessing any variable like name or make or model we need to understand the context of the var, thus we assign that var to its context that it is present in the constructor function and it will change when we use new keyword to creat a new object instance
//  THus this keyword provides the context that you are talking about this particular function and about your copy of it
//  this keyrod points to newly created object inside the function. for ex Car("Maurti Suzuki", "Ritz") so now this keyword is pointing to this newly created object similarly new Car("Tata", "Harrier") now this keyword is pointing to this newly created object
//  so so so so anything you are writing inside a constructor function it need to have this keyword as a prefix
// THus new and this are related

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a cup of ${this.type}`; // So again we cannot directly write 'type' we have to write it as 'this.type' to provide the context
  };
}
let chai = new Tea("chai");
// console.log(chai.describe());

function Animal(species) {
  this.species = species;
}

//  Now ik I have defined this constructor function, so we know that this constructor function exists and later we can actually take that constuctor function later on or in any file you are importing this with protoype
//  once I access the prototype I can actually go and add a property or method. For ex I want to add a sound but I aslo need to add a sound defination what does the sound method does
Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("dog");
// console.log(dog.sound());

let cat = new Animal("cat");
// console.log(cat.sound());

//  I can also also throw an error if a person is not creating a new object with new keyword
function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}
let tea = new Drink("Chaha");
let coffee = Drink("coffee");
