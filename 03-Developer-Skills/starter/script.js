// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = '23';
const age = birthYear => 2022 - birthYear;
console.log(); // cl
// NPM

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) Fix
    value: Number(prompt('Degrees celsius:')),
  };
  //   console.log(measurement);
  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  // B) Find
  // debugger;
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin()); */

const T = [17, 21, 23];
const printForecast = arr => {
    let temp = '...';
    for (let i = 0; i < arr.length; i++) {
        temp += `${arr[i]}C in ${i + 1} days...`;
    }
    console.log(temp);
};

printForecast(T);
