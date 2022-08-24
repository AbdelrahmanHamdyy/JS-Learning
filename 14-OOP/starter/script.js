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
/*const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2022 - this.birthYear);
  //   };
  // We will instead use prototypes and prototypal inheritance
};

Person.hey = function() {
    // Static method
    console.log('Hello');
}
Person.hey()

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
// Prototype of Person.prorotype is Object.prototype (Top of prototype chain) built from the constructor function Object()
// {...} === new Object(...)
// Prototype of Object.Prototype is null
// Prototype Chain is similar to the scope chain
console.log(jonas.__proto__.__proto__); // Object.prototype
console.log(jonas.__proto__.__proto__.__proto__); // null
console.dir(Person.prototype.constructor);
const arr = [3, 6, 4, 4, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__); // Object.prototype

// Adding a new method to the Array prototype
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
const h1 = document.querySelector(h1); // Prototype chain has 6/7 levels
console.dir(x => x + 1); // Has function prototype which contains apply, call and bind

CC#1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`New Speed of ${this.make} = ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`New Speed of ${this.make} = ${this.speed} km/h`);
};

const bmw = new Car('BMW', 90);
const mercedes = new Car('Mercedes', 90); */

// class expression
// const PersonCl  = class()

// class declaration
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // These functions will be added to the prototype of the object
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('Given name is not a full name');
  }

  get fullName() {
    this._fullName;
  }

  // Static Method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new Person('Jessica', 1999);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === Person.prototype);

Person.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();
// 1. Classes are not hoisted
// 2. Classes are first-class citizens (Passed to and returned from a function)
// 3. Classes are exexuted in strict mode

const walter = new Person('Walter', 1976); // FullName will not be recorded because the set function is called and it checks for a space

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(movement) {
    this.movements.push(movement);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account);

// Static methods -> Like Array.from
console.log(Array.from(document.querySelectorAll('h1')));
console.log(Number.parseFloat(12));

Person.hey();
