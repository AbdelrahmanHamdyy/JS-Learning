'use strict';

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [days[3]]: {
    open: 12,
    close: 22,
  },
  [days[4]]: {
    open: 11,
    close: 23,
  },
  ['sat']: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // ES6 enhanced object literals
  openingHours,

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // Default Value

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // De-structuring
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories; // Skip 2nd element
console.log(main, secondary);

// Swap
[secondary, main] = [main, secondary];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k); // Nested Destructuring

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Spread Operator (...)
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr); // Whenever we need the elements of an array individually, we use the spread operator

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT Objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Hamdy`); // Error

// const ingredients = [
//   prompt("Lets's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Mark' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

const arr = [1, 2, ...[3, 4]]; // Spread

// REST, because ... is on the left side of the = sign
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// REST element must be the last element
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// In objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat);
console.log(weekdays);

// In functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
  return sum;
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 3, 5, 1, 2);

const x = [23, 5, 7];
add(...x);

// Spread -> variables separated by commas
// Rest -> values separated by commas

// IMPORTANT: Spread is the opposite of Rest
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'cheese', 'bbq');
restaurant.orderPizza('mushrooms');
// Dynamic arguments to functions basically

// Logical operators can use/return any data type
console.log('---- OR ----');

console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(null || undefined);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// Better alternative
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----'); // EXACT OPPOSITE OF THE OR

console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // 'Jonas'

// Practical Example
console.log('Hello' && 23 && null && 'Jonas');
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'cheese');
}

restaurant.orderPizza &&
  restaurant.orderPizza('mushrooms', 'olives', 'bbq', 'tomato');

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish Coalescing operator (works with null / undefined only and doesnt include 0 and the empty string)
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La PizZa',
  owner: 'Giovani Rossi',
};

// OR & NULLISH assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ||= 10;
// AND assignment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);

// CODING CHALLENGE #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;

// 2.
const [gk, ...fieldPlayers] = players1;

// 3.
const allPlayers = [...players1, ...players2];

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored!`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

// FOR-OF
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const item of menu) {
  console.log(item);
}
for (const item of menu.entries()) {
  console.log(item);
}
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// OPTIONAL CHAINING
// prints undefined if the property doesn't exist (no error)
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of weekdays) {
  console.log(day);
  const open = openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist!');
console.log(restaurant.orderRisotto?.(0, 1) || 'Method does not exist!');

const users = [{ name: 'Jonas', email: 'hello@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty');

// KEYS
const properties = Object.keys(openingHours);
console.log(properties);
let str = `We are open on ${properties.length} days: `;
for (const day of Object.keys(openingHours)) {
  str += `${day}, `;
}
console.log(str);

// VALUES
const values = Object.values(openingHours);
console.log(values);

// Entries = key + value
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log([...menu.entries()]);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [goal, player] of game.scored.entries())
  console.log(`Goal ${goal + 1}: ${player}`);

let sum = 0;
const oddsValues = Object.values(game.odds);
const oddsEntries = Object.entries(game.odds);
for (const val of oddsValues) sum += val;
console.log(sum / oddsValues.length);

const {
  odds: { team1, x: draw, team2 },
} = game;

for (const [Name, odd] of oddsEntries) {
  console.log(
    `Odd of ${Name === 'x' ? 'draw' : `victory ${game[Name]}`}: ${odd}`
  );
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

// Sets
const orders = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orders); // NO DUPLICATES
console.log(new Set('Jonas'));
console.log(orders.size);
console.log(orders.has('Pizza'), orders.has('Bread'));
orders.add('Garlic');
console.log(orders);
orders.delete('Risotto');
console.log(orders);
// Can't retrieve values out of a set
// orders.clear();

for (const order of orders) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // --> Array
console.log(staffUnique.size, staffUnique);
console.log(new Set('jonasschmedtmann').size);

// MAPS
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();
rest.set([1, 2], 'Test');
console.log(rest);
// console.log(rest.get([1, 2])); // UNDEFINED
const arr = [2, 3, 4];
rest.set(arr, 'Works');
console.log(rest.get(arr));
rest.set(document.querySelector('h1'), 'HEADER');
console.log(rest);

const question = new Map([
  ['question', 'What is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'Correct 😊'],
  [false, 'Try Again!'],
]);

console.log(question);
// Convert Object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your Answer:'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert Map to array
console.log([...question]); // Array of arrays
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

// CODING CHALLENGE
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const uniqueEvents = new Set(gameEvents.values());
console.log(uniqueEvents);
gameEvents.delete(64);
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop(); // Removes the last element of the array and returns it
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
for (const [num, event] of gameEvents) {
  console.log(`${num <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'}: ${event}`);
}
console.log(gameEvents);
console.log([...gameEvents]);

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4)); // Returns a new string (substring)
console.log(airline.slice(4, 7)); // Stops extracting before reaching index 7 (length = end - start)

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('Middle Seat');
  else console.log('You got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Jonas'));
console.log(typeof new String('Jonas'));

console.log(airline.toLowerCase());
console.log('abdelrahman'.toLocaleUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
// There's also trimStart and trimEnd
console.log(normalizedEmail);
console.log(email === normalizedEmail && 'Success');

// Replacing
const price = '288,97E';
const priceUS = price.replace('E', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23, Boarding door 23';
console.log(announcement.replace('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate')); // REGEX

// Booleans
const airplane = 'Airbus A320neo';
console.log(airplane.includes('A320'));
console.log(airplane.startsWith('Air'));
console.log(airplane.endsWith('neo'));

// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Abdelrahman Hamdy'.split(' '));

const [firstName, lastName] = 'Jonas Shmedtmann'.split(' ');

const fullName = ['Mr.', firstName, lastName.toLocaleUpperCase()].join(' ');
console.log(fullName);

const passenger = 'jessica ann smith davis';

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName(passenger);

// Padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '-').padEnd(35, '-'));
console.log('Jonas'.padStart(25, '-'));

const maskCreditCard = function (number) {
  const str = number + ''; // Type Coercion
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(32323232345434343));
console.log(maskCreditCard('43434231304347'));

// Repeat
const message2 = 'Bad weather.. All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);

// CODING CHALLENGE

// FROM UNDERSCORE CASE TO CAMEL CASE

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const textArr = text.split('\n');
  console.log(textArr);
  for (const [i, row] of textArr.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(output.padEnd(25, ' ') + '✅'.repeat(i + 1));
  }
}); */

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} ${time.replace(':', 'h')}`.padStart(30);
  console.log(output);
}
