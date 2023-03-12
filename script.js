"use strict";

function hello() {
  return "Hello, World!";
}

console.log(hello());

const firstName = "Daniel";
const lastName = "Javier";

const fullName = `${firstName} ${lastName}`;

console.log(fullName);

let x = 3;
let y = 6;

console.log(x + y);

let myString = "This is a string";
console.log(myString);
console.log(typeof myString);

let myNumber = 44;
console.log(myNumber);
console.log(typeof myNumber);

let myBoolean = false;
console.log(myBoolean);
console.log(typeof myBoolean);

let favoriteFoods = ["popcorn", "fries", "burger"];
console.log(favoriteFoods[2]);

function numberValue() {
  let number = 4;

  if (number > 0) {
    return "positive";
  } else if (number < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
console.log(numberValue());
