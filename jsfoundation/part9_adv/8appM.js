// MOST OF THE TIME WE USE MODULE IMPORT AND EXPORT SO USE THAT MORE OFTEN THAN COMMON JS IMPORT AND EXPORT

// Module import file

// Default import
import multiply from "./8mathOperationsM.js";

// Named import
import { add, subtract } from "./8mathOperationsM.js";

console.log(multiply(5, 4));
console.log(add(5, 6));
console.log(subtract(5, 5));
