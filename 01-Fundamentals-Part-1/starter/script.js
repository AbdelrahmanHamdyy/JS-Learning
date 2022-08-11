/* let js = "Amazing";
console.log(40 + 8 + 23 - 10);

let fName = "Jonas";
console.log(fName);

let country = "Egypt";
let continent = "Africa";
let population = 90000000;

console.log(country);
console.log(continent);
console.log(population);

// Value --> Object/Primitive
// JS has dynamic Typing - Value has type, not the Variable
// 7 Data Types: Number - String - Boolean
//               Undefined - Null - Symbol - BigInt
// 'ctrl /' to comment

let jsIsFun = true;
console.log(jsIsFun);
console.log(typeof jsIsFun);
console.log(typeof "Hamdy");
console.log(typeof 20);

jsIsFun = "YES!";
console.log(typeof jsIsFun);

let year; // undefined
console.log(year);
console.log(typeof year);

year = 2022;
console.log(year);
console.log(typeof year);

console.log(typeof null); // Bug - should print null but gives object

// var is old - let and const were introduced with ES6
const birthYear = 2002; // can never be changed
// const job; this is illegal
// let is block-scoped and var is function-scoped
// Never use var

Owner = "Matt"; // Global
console.log(Owner);

const currYear = 2022;
const ageJonas = currYear - 1991;
const ageSarah = currYear - 2000;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// ** is exponent

const firstName = "Jonas";
const lastName = "Shmedtmann";
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5;
console.log(x);
x += 10;
x /= 2;
x *= 4;
x--;
x++;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // > < >= <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;

// Operator Precedence - Look up MDN
let x, y;
x = y = 25 - 10 - 5; // Right to left
console.log(x, y);

// Coding Challenge #1
const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;

const markBMI = weightMark / heightMark ** 2;
const johnBMI = weightJohn / heightJohn ** 2;
console.log(markBMI, johnBMI);
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

const firstName = "Abdelrahman";
const job = "Computer Engineering Student";
const birthYear = 2002;
const year = 2022;

const abdelrahman = "I'm " + firstName + ', a ' + (year - birthYear) +
' years old ' + job + '!';
console.log(abdelrahman);

const abdelrahmanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`; // Template Literals
console.log(abdelrahmanNew);
console.log(`Just a regular String`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

const age = 15;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log("Sarah can get a driving license 🚗");
} // 'windows .' for emojis
else {
    const yearsLeft = 18 - age;
    console.log("Sarah is not old enough! 🙁");
    console.log(`Wait another ${yearsLeft} years!`);
}

const birthYear = 2002;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(`Born in the ${century} century.`);

const inputYear = '2022';
console.log(Number(inputYear) + 18); // Type Conversion
console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23), 23);
console.log(String(8) + ' Street');

console.log(`I am ` + 20 + ` years old!`); // Type Coercion
console.log('23' - '10' - 3); // - Operators triggers type coercion
// + converts numbers to strings
// 2 + 3 + 4 + '5' ---> 95
// '10' - '4' - '3' - 2 + '5' ---> 15
console.log('23' * '2'); // 46
console.log('40' / 2);

// 5 Falsy Values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(NaN));

const money = 1000;
if (money) {
    console.log(`Dont spend it all.. Balance = \$${money}`);
} else {
    console.log("You should get a job!");
}

let height; // undefined (Falsy)
if (height) {
    console.log("Yayy! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}

const age = '18';
// Equality Operator
if (age === 18) console.log("You just became an adult! (strict)");
// == does type conversion unlike ===
if (age == 18) console.log("You just became an adult! (loose)");

const fav = Number(prompt("What's your favourite number?"));
console.log(fav, typeof fav);

if (fav === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (fav === 7) {
    console.log("7 is also a cool number!");
} else {
    console.log("Not cool eh?");
}

// != !== (Different Operator)
if (fav !== 23) console.log("Why not 23?");
// Make sure to use the strict version of equality or different

const hasDriversLicense = true; // A
const hasGoodVision = false; // B
const isTired = true; // C

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

if (shouldDrive) console.log("Sarah is able to drive!");
else console.log("Ineligible..");

// Coding Challenge #3

const dolphinsScore = (96 + 108 + 89) / 3;
const koalasScore = (88 + 91 + 110) / 3;

if (dolphinsScore > koalasScore && dolphinsScore >= 100)
    console.log("D");
else if (koalasScore > dolphinsScore && koalasScore >= 100)
    console.log("K");
else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100)
    console.log("Draw");
else
    console.log("None");

// SWITCH statement
const day = 'monday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log("M1");
        console.log("M2");
        break;
    case 'tuesday':
        console.log("T");
        break;
    case 'wednesday':
    case 'thursday': // 'wednesday' || 'thursday'
        console.log("W");
        break;
    default:
        console.log("D");
} */

// Ternary Operator
// {Condition} ? {Statement If True} : {Statement If False}

// ------------------------ SECTION 1 DONE ---------------------------