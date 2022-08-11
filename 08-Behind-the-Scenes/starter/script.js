'use strict';

/* function calcAge(birthYear) {
  const age = 2022 - birthYear;
  console.log(firstName, age);
  return age;
}

const firstName = 'Abdelrahman';
calcAge(2002);

// Hoisting: Makes some types of variables accessible/usable in the code beforet they are actually declared.
// Before execution: code is scanned for variable declarations

console.log(v1); // undefined
// console.log(v2); // error
// console.log(v3); // error

var v1 = 1;
let v2 = 2;
const v3 = 3;

console.log(add(2, 3));
// console.log(addEx(2, 3));
// console.log(addArr(2, 3));

function add(a, b) {
  return a + b;
}
const addEx = function (a, b) {
  return a + b;
};
const addArr = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

// this
// method -> this is the object that is calling that method
// function -> undefined
// arrow -> this of surrounding function
// event listener -> DOM element that the handler is attached to

// this does not point to the function itself or the variable env

// console.log(this); // window
const calcAge = birthYear => {
 console.log(2022 - birthYear);
 console.log(this); // Lexical this keyword -> window
};
calcAge(2002);

const obj = {
 firstName: 'Jonas',
 year: 2002,
 calcAge: function () {
  console.log(this);
  const self = this;
  const isMillenial = function () {
   console.log(this.year >= 1981 && this.year <= 1996);
  };
  isMillenial(); // this -> undefined because its a regular function call
 },
 // However if it was an arrow function then it would have inherited the this keyword from its parent scope and in this case year will be read
 greet: () => console.log(`Hey ${this.firstName}`), // Hey undefined
};
// Never use an arrow function as a method or var
// obj.calcAge();
obj.greet();
obj.calcAge();

const obj2 = {
 year: 2017,
};
obj2.calcAge = obj.calcAge;
// obj2.calcAge(); // Called on obj2

const addExpr = function (a, b) {
 console.log(arguments); // Does not exist in arrow functions
 return a + b;
};

// Objects act as pointers (Stored in the memory heap)
// Primitive types are stored in the call stack (Execution Context)
// Objects are reference values

// Copying objects without referencing
const jess = {
    firstName: 'Jessica',
    lastName: 'Belvins',
    age: 27
};

const jessCopy = Object.assign({}, jess);
// But this doesn't deep clone (Object inside another) */
