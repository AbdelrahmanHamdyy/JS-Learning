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
// 3. {} is linked to a prototype (sets proto property of the object to the prototype property of the constructor)
// 4. function automatically returns {}

const jonas = new Person('Jonas', 1991);
const jack = new Person('Jack', 1980);
console.log(jonas, jack);

console.log(jonas instanceof Person); // True

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};
// Now only 1 copy of this function exists
jonas.calcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas)); // True
console.log(Person.prototype.isPrototypeOf(Person)); // False
// .prototype => .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, jack.species); // Inherits the species property from the prototype
console.log(jonas.hasOwnProperty('firstName')); // True
console.log(jonas.hasOwnProperty('species')); // False
// Person.prototype.constructor -> Person
// Prototype of Person.prorotype is Object .prototype built from the constructor function Object()
// {...} === new Object(...)
// Prototype of Object.Prototype is null
// Prototype Chain is similar to the scope chain
