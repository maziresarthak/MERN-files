let car = {
  make: "Toyota",
  model: "Innova",
  year: 2000,
  start: function () {
    return `${this.make} ${this.model} car got started in ${this.year}`;
  },
};
// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John Doe", 19);
// console.log(john);
// console.log(john.name);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

// I can literally access anything usin protoype, lets inject a method sarthak in all arrays using prototype and lets see if I can access it in other arrays
Array.prototype.sarthak = function () {
  return `Custom method ${this}`;
};

let myArray = [3, 2, 1];
// console.log(myArray.sarthak());
let myNewArray = [5, 7, 9, 11];
// console.log(myNewArray.sarthak());
// So both the individual arrays has access to the method as the method was injected in all arrays by protoype
// And both are able to individually identify who is calling them this keyword is calling them so thats the reference
// This is prototypal chain

// As soon as the function goes inside a class or object or the curly parenthesis it is called as a methods
// So in a class there should be a constructor function mandatory and then we can also declare var in it but most of the time we create methods in class and ofc there is no need of function keyword to create a method

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

// Lets take an example of inheritance, as we know inheritance is like borrowing properties from someonelse, so for now lets borrow the properiets of the class Vehicle and inject in an another class Car

class Car extends Vehicle {
  drive() {
    return `${this.make} : This is inheritance example `;
  }
}

// Since there is no constructor method/function in the class Car it will just eventually borrow/inherit it from Vehicle class
let myOwnCar = new Car("Toyota", "Fortuner");
// console.log(myOwnCar.start());
// console.log(myOwnCar.drive());
// console.log(myOwnCar.make);
// console.log(myOwnCar.model);

// Encapsulation : I want to restrict the direct access to the object data

class BankAccount {
  #balance = 0; //I dont want anyoneto access this data here so I just put a hash at the start

  // If they want to access it they have to provide custom method
  deposit(amount) {
    this.#balance += amount; //so this is the method and I can access balance only within the class, so I have to provide methods to access the balance only
    return this.#balance;
  }

  // Whenever we encapsulate/hide data we don't want to just hide the data we want to make the classes and object to access it but with some restrictions, like for ex : return balance in ₹ format only
  getBalance() {
    return `₹ ${this.#balance}`;
  }
}

let newAccount = new BankAccount(); // We dont need to pass any parameters as there is no constructor function so ofc no parameters
// console.log(newAccount.balance);
// console.log(newAccount.#balance);
// So ofc I cant acces balance normally and also with # that's why we use methods so tat we can access balance by these methods only
// console.log(newAccount.getBalance());
// console.log(newAccount.deposit(10000));
// console.log(newAccount.getBalance());
// So ofc basic logic hoto pahila balance 0 hota pan me amount deposit keli so ofc balance change hotay ani ofc amount method madhe me normally fakt #balance return kartoy with no Rs symbol but I use so for getBalance() method
// Where encapsulation can be used :
// Now sometimes its not really that simple that you are having a 0 value, sometimes the value needs to be retrieved from the databse you need to get it you need to transform it do some magic of the programming to it make some filter and whole lot of things and you don't want anyone to access it you want that there should be a method to triger it because if you access it directly there is no programminng that you can trigger but as soon as I go ahead and get a trigger on this method I can run a bunch of statements, that's why it is being used

// Abstraction : It hides the complex implementation details

class CoffeeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine...`; // I don't care what you are doing I just want the message this is abstraction, whatever you want to do keep on doing that
  }

  brewCoffee() {
    // complex calculations
    return `Brewing coffee`;
  }

  pressStartButton() {
    // this.start()
    // this.brewCoffee()
    let msgone = this.start();
    let msgtwo = this.brewCoffee();
    return `${msgone} + ${msgtwo}`;
    // We have the knowledge that when a function is being executed it doesn't just executes automatically it returns you something  and you can hold that in a variable, so thats why I had to hold both in msgone and msgtwo then returned thats why I commented above bcoz only those two line won't give me the return statement
  }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// Actually the guy usually doesn't need to kknow all these details he just wants to start the machine so I will create a method pressStartButton() to just return start() and brewCoffee()
// console.log(myMachine.pressStartButton());

// Polymorphism : The ability of something to have or to be displayed in more than one form

class Bird {
  fly() {
    return `Flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());
// This is polymorphism the method naeme is exactly same but the behaviour of the method is different

// Static method

class Calculator {
  // Now static can be a method or property(variables, constant, etc), lets just assume it to be a method now
  static add(a, b) {
    return a + b;
  }
}
// So basically statics are a special method that can only be called by the class itself, nobody else can call it

// let miniCalc = new Calculator();
// console.log(miniCalc.add(3, 6)); This gives me an error, TypeError: miniCalc.add is not a function, this is the error we get
// sometimes you want some methods that needs to be static with the class that hey nobody should using it by creating an object, so this is how we use it :
// console.log(Calculator.add(3, 6)); // So this class actually directly calls this
// And use there are use case you dont want to create any object which can acces this property or maybe method you want this class directly to call this

// Getters and setters
// I got defination of getters and setters in the quiz of his course xD
// Getters are used to fetch data, and setters are used to modify data, providing a way to control access to object properties
// In the 59th video of the udemy course for getters and setters he has not explained it well and he makes that concept really confusing but to understand it in easy manner with 2 examples watch this yt video and if I find time I will write its explanation here too : https://youtu.be/KQVCAnh6Afk?si=gQ_3v93AW30WqW9U so lets go I will try my best to explain the vid
// Disclaimer : he has provided 2 examples and I will also mention it here so after it the down example is of the udemy course so don't get confused

// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

// 1st example :

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // For setteres we need a parameter compulsoy
  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
      // Using an underscore as a prefix it tells the other developers that this is a private property and it shouldn't touch it at all, we can say that this private property of width is different than our standard widht property
    } else {
      console.error("Width must be a positive number");
    }
    // For now the output is :
    // Width must be a positive numeber
    // undefined;
    // Its showing undefined because we have not used getter yet as it will make it readable, and its compulsory to use getters and setters both not either of them, these properties are writable via setters but not readable that's where getters come in
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("Height must be a positive number");
    }
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  // We can even use the property accessor that dot to access a property that doesn't neccesarily exists
  get area() {
    return this._width * this._height;
  }
}
// let rectangle = new Rectangle(-400000, "burger"); This was just to validate data so no garbage value gets passed and we want to get error to understand
// We are just giving redicilous values to understand this example. We can use some validation while creating an object, we don't want people to enter garbage values like negative width or a string for height when we are expecting positive number for them. That's where getters and setters come into play
// Setters : When setting one of these properties either initially through a constructor or updating one of them later such as for ex let width = 3434 we use setter for data validation
let rectangle = new Rectangle(4, 9); // Now lets pass legit values

// Now by using setters we can even update those values later :
// rectangle.width = 21;
// rectangle.height = 5; // If here I set to garbage values then it will give an error and will return to the earlier values that are 4, 9

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area); // Area isn't a property technically its not in the constructor but we can access it as if it was a property with the getter
// Conclusion : When you are assigning values even when you are initially creating objects you can go through the setters for input validation, when you retrieve value and try to read them you can add additional logic too

// 2nd Example :
class NewPerson {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(NewFirstName) {
    if (typeof NewFirstName === "string" && NewFirstName.length > 0) {
      this._firstName = NewFirstName;
    } else {
      console.error("First name must be a non-empty string");
    }
  }

  set lastName(NewLastName) {
    if (typeof NewLastName === "string" && NewLastName.length > 0) {
      this._lastName = NewLastName;
    } else {
      console.error("Last name must be a non-empty string");
    }
  }

  set age(NewAge) {
    if (typeof NewAge === "number" && NewAge >= 0) {
      this._age = NewAge;
    } else {
      console.error("Age must be a non-negative number");
    }
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get age() {
    return this._age;
  }
}
// let newperson = new NewPerson(4230, 89, "pizza");
let newperson = new NewPerson("Dexter", "Morgan", 30);
// console.log(newperson.firstName);
// console.log(newperson.lastName);
// console.log(newperson.fullName);
// console.log(newperson.age);

class Empolyee {
  // #salary;

  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative");
    }

    this.name = name;
    this._salary = salary; // There are two meanings of underscore here first is that getter and setters are about to come for that particular var/par you for now that is salary. Second this salary should be private it should not be accessed by others. Now basically whtn anyone will use .salary in the console log cll he will not be able to access it ofc due to getters and setters but he can access it using _salary and If I want to really really hide it I can use the previous knowledge and use #salary and then changing this._salary = salary to this.#salary = salary
    // this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see the salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error(`Invalid salary`);
    } else {
      this._salary = value;
    }
  }
}
// let emp = new Empolyee("Ethan", -50000);
// console.log(emp.salary);
