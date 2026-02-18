// MOST OF THE TIME WE USE MODULE IMPORT AND EXPORT SO USE THAT MORE OFTEN THAN COMMON JS IMPORT AND EXPORT

// Common js export

// Named export
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = {
  add,
  subtract,
  multiply,
};
