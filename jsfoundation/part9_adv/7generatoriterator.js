// Never used much, in very rare case I will not write any comments on this if I need this again in my life just once watch the udemmy course video lecture 71
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = numberGenerator();
let genTwo = numberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(genTwo.next().value);
console.log(genTwo.next().value);
