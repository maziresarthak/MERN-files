//  To understand everything about prototype and inheritance, method, function ,property, loops dif between foreach, forin and foroff just refer below 2 links. For now no explanation of prototype from my side lets see if I want I will comment here
// Just for basic infor prototype is just an object which inherits properties and behaviour from other objects
// It is present in every object, like for ex conputer,lenovo,tomHardware here every object has inside another object which is protoype which points to further base object class which points to null, for more details watch the vid.
//  but basically __proto__ is used to inherit other object properties and behaviour
// https://chatgpt.com/share/695fe05b-50b0-8004-9f29-472b9324ca64
// https://youtu.be/AOPmqw9scfc?si=-me-oIqSwPq2F17s

// so so so here all the properties of object for ex property like cpu:12 of computer, turns out computer or in general the object does not get direct access of the property ie computer does not get direct access of the property cpu:12 so somebody is there in between who is giving the access to all of properties is usually a prototype, so all properties you want to inject are injected bts via this protoype object. look at the dia in thi folder

let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer,
};
let tomHardware = {};

//  this double underscore is called as dunder
// console.log(`computer : `, computer.__proto__);
// console.log(`lenovo : `, lenovo.__proto__);

//  this double underscore is old technique no one likes it so the new way is :

let genericCar = { tyres: 4 };

let tesla = { driver: "AI" };

Object.setPrototypeOf(tesla, genericCar); // his only works on object but if I want to have protype of a function to link to another function we use animal.prototype(assume animal is a function name)
//  This mean in tesla I want to access properties of genericCar, ie properties of genericCar are inherited in tesla, ie it can ber written as :
// let tesla = {
//   driver: "AI",
//   __proto__: genericCar,
// };

// console.log(`tesla : `, tesla);
// Now this is a way  of printing, but a better way to access the protoype is
console.log(`tesla : `, Object.getPrototypeOf(tesla));
// tesla always has access to its own property but if you want to access the property that you have injected using prototype try to access them using Object.getPrototypeOf() instead of dunder
