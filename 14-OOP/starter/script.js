'use strict';
// Abstraction -> Hiding details that don't matter
// Encapsulation
// Inheritance
// Polymorphism

// Objects are instantiated from a class, which functions like a blueprint

//************* OOP IN JS (Prototypes) ***************

// Prototype contains methods and objects can access these methods
// Objects are linked to a prototypal object
// Prototypal inheritance -> The prototype contains methods (behaviour) that are accessible to all objects linked to that prototype
// Ex: Array.prototype is the prototype of all array objects we create

// Constructor Functions
// Only function declarations and expressions
const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2022 - this.birthYear);
  //   };
  // We will instead use prototypes and prototypal inheritance
};

const me = new Person('Abdelrahman', 2002);
console.log(me);

// 1. New empty object {} is created
// 2. Function is called, this = {}
// 3. {} is linked to a prototype
// 4. function automatically returns {}

const jonas = new Person('Jonas', 1991);
const jack = new Person('Jack', 1980);
console.log(jonas, jack);

console.log(jonas instanceof Person); // True
