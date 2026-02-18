// MOST OF THE TIME WE USE MODULE IMPORT AND EXPORT SO USE THAT MORE OFTEN THAN COMMON JS IMPORT AND EXPORT

// Module export

// Named export
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// Default export
export default function multiply(a, b) {
  return a * b;
}
