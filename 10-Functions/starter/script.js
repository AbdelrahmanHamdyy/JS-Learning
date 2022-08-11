'use strict';

/*

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers // Must be in this order
) {
  //   numPassengers ||= 1;
  //   price ||= 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// Note: We cannot skip arguments to a function
// But we can do this
createBooking('LH123', undefined, 1000);

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 247398712,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 247398712) {
    alert('Checked In');
  } else {
    alert('Wrong Passport');
  }
};

checkIn(flight, jonas);
console.log(flight); // Passed by value
console.log(jonas); // As if it was passed by reference, but actually Passenger and jonas are the same object in the memory heap
// JS doesn't have pass my reference methodology, We pass a reference to the function
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(jonas);
checkIn(flight, jonas);

// Functions can have methods and properties

// FIRST-CLASS VS HIGHER-ORDER FUNCTIONS

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order Function (Operates at a higher level of abstraction leaving the low level details for the low level functions --> fn)
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time, creating a new level of abstraction
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

// Abstraction --> Hides the details

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetings = greet('Hey'); // RETURNS A FUNCTION
greetings('Jonas');
greetings('Steven');
// OR
greet('Hello')('Jonas');

// Useful in Functional Programming
// Using Arrow functions
const greet = msg => name => console.log(`${msg} ${name}`);

greet('Hello')('Jonas');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Abdelrahman');
lufthansa.book(635, 'Jonas');
console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// Call Method

const book = lufthansa.book;
// book(23, 'Sarah'); // ERROR
book.call(eurowings, 23, 'Sarah');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Ziad');
console.log(swiss);

// Apply Method (Takes an array for the arguments)
const flightData = [432, 'George'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(eurowings, ...flightData);

// BIND METHOD
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(215, 'Steven');

const bookEW23 = book.bind(eurowings, 23); // Flight number preset
// Now it only needs the name
bookEW23('Yousef');
bookEW23('Ali');

// With Event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // Fixed rate
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

// CODING CHALLENGE
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    console.log('Button Pressed');
    const option = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    typeof option === 'number' &&
      option < this.answers.length &&
      this.answers[option]++;
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') console.log(this.answers);
    if (type === 'string') {
      // let output = `Poll results are ${this.answers[0]}`;
      // for (let i = 1; i < this.answers.length; i++) {
      //   output += `,${this.answers[i]}`;
      //   console.log(output);
      // }
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

let pollBtn = document.querySelector('.poll');

pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// IIFE
(function () {
  console.log('This will never run again');
})();

(() => console.log('Arrow Never Broke Again'))();

{
  const isPrivate = 23;
  var notPrivate = 10;
}
console.log(notPrivate);

// Call stack is a collection of execution contexts

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

// A function has access to the variable environment of the execution context in which it was created even after that execution context is gone (function returned)

// Closure: Variable Environment attached to the function, exactly as it was at the time and place the function was created
// --> Higher priority over the scope chain
// --> Reference to outer scope
// --> Makes sure a function doesn't lose the connection to the variables that existed at the function's birth place
// --> NOT a tangible JS object

console.dir(booker);
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

// g();
// f(); // Uses closure to access a

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3); */

// CODING CHALLENGE
