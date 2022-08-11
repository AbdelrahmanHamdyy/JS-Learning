'use strict'; // Secure mode (easier to avoid errors)
// JS will less likely fail silently

/*
let hasDriversLicense = false; 
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("Can drive");

// Reserved
// const interface = 'Audio';
// const private = 534;
// const if = 23;

function logger() {
    console.log("My name is Abdelrahman!");
}

logger(); // Function Call
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(3, 2);
console.log(appleOrangeJuice);

// Function Declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge1(2002);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(2002);

console.log(age1, age2);

// A function can be called before its declaration but not when it's an expression

// Arrow Function (has no this keyword)
const calcAge3 = birthYear => 2022 - 2002;
const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2002, 'Abdelrahman'));
console.log(yearsUntilRetirement(1991, 'Jonas'));

function cutFruitPieces(fruit) {
    console.log("Cutting fruit..");
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(3, 2));

// Coding Challenge #1
const avgScore = (s1, s2, s3) => (s1 + s2 + s3) / 3;
const dolphinsScore = avgScore(85, 54, 41);
const koalasScore = avgScore(23, 34, 27);
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas)
        console.log(`Dolphins win 🏆 (${avgDolphins}, ${avgKoalas})`);
    else if (avgKoalas >= 2 * avgDolphins)
        console.log(`Koalas win 🏆 (${avgKoalas}, ${avgDolphins})`);
    else {
        console.log(`No team wins`);
        console.log(`Dolphins Score: ${avgDolphins}`);
        console.log(`Koalas Score: ${avgKoalas}`);
    }
}

checkWinner(dolphinsScore, koalasScore);

// --------------------------- ARRAYS ------------------------------

const v = [1, 2, 3, 4 ,5];
const friends = ['Zeyad', 'Khaled', 'Zuz', 'Fathi'];
console.log(friends);
const years = new Array(10, 20 ,30 ,40);
console.log(friends[0], friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]); // Last element
friends[2] = 'Yousef';
console.log(friends);
// An array is not primitive (Can mutate arrays even when declared const)
const abdelrahman = ['Abdelrahman', 'Hamdy', 2022 - 2002, friends];
console.log(abdelrahman);

const friends = ['Zeyad', 'Khaled', 'Zuz', 'Fathi'];
const newLength = friends.push('Jay');
console.log(newLength);
friends.unshift('John');
console.log(friends);
const popped = friends.pop();
console.log(`Popped: ${popped}`);
console.log(friends);
friends.shift();
console.log(friends);
console.log(friends.indexOf('Khaled'));
console.log(friends.indexOf('Bob'));
console.log(friends.includes('Steven'));
console.log(friends.includes('Fathi')); // Tests with strict equality

// OBJECTS

const info = {
    firstName: 'Abdelrahman',
    lastName: 'Hamdy',
    age: 20,
    job: 'Student',
    friends: ['Zizo', 'Ziad', 'Khaled']
};

console.log(info);
console.log('First Name: ' + info.firstName);
console.log('Last Name: ' + info['lastName']);
const nameKey = 'Name';
console.log(info['first' + nameKey]);
console.log(info['last' + nameKey]);

const interest = prompt('What do you want to know about Abdelrahman?');
console.log(info[interest]);

info.location = 'Egypt';
info['instagram'] = '@_abdelrahman10';
console.log(info);

console.log(`${info.firstName} has ${info.friends.length} friends, and his best friend is called ${info['friends'][0]}.`);

const info = {
    firstName: 'Abdelrahman',
    lastName: 'Hamdy',
    birthYear: 2002,
    job: 'Student',
    friends: ['Zizo', 'Ziad', 'Khaled'],
    hasDriversLicense: true,

    // Method (Has to be a function expression)
    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2022 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${info.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};

console.log(info.calcAge());
console.log(info.age);
// console.log(info.calcAge(info.birthYear));
// console.log(info['calcAge'](info['birthYear']));

console.log(info.getSummary());

// Coding Challenge #3

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(`${mark.bmi > john.bmi ? mark.firstName : john.firstName}'s BMI (${mark.bmi > john.bmi ? mark.bmi : john.bmi}) is higher than ${mark.bmi > john.bmi ? john.firstName : mark.firstName}'s (${mark.bmi > john.bmi ? john.bmi : mark.bmi})`);

// DONT REPEAT YOURSELF

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights -> repetition ${rep}`);
}

const arr = [1, 2 ,3 ,4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// BREAK and CONTINUE (C++)

let dice = Math.trunc(Math.random() * 6) + 1;
if (dice == 6)
    console.log(`Wow ${dice} already!`);
while (dice != 6) {
    console.log(`You rolled a dice ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice == 6)
        console.log(`Loop ended (${dice}).`);
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}

console.log(bills, tips, totals);
console.log(calcAverage([2, 3, 7])); */






