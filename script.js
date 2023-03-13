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

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

function adding() {
  let a = 5;
  let b = 10;

  return a + b;
}
console.log(adding());

let person = {
  height: 183,
  shoeSize: 10,
  number: 3,
};

console.log(person.shoeSize);
console.log(person.height);
console.log(person.number);

document
  .querySelector("#btn")
  .addEventListener("click", alert("Hello, World!"));
