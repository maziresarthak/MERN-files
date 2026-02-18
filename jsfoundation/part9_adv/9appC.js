// MOST OF THE TIME WE USE MODULE IMPORT AND EXPORT SO USE THAT MORE OFTEN THAN COMMON JS IMPORT AND EXPORT

const mathOperations = require("./9mathOperationsC.js");
// As module.exports  is an object which is holding the add,subtract,etc functions so this require("./9mathOperationsC.js") also holds the object thus it can be accessed as dot as a property

console.log(`${mathOperations.add(2, 3)} and ${mathOperations.subtract(2, 3)}`);
