'use strict';

///////////////////////////////////////
// Synchronous code is executed line by line
// Each line of code waits for previous line to finish
// Long running operations block code execution
// Asynchronous code is executed after a task that runs in the background finishes
// Asynchronous code is non-blocking
// Execution doesn't wait for an asynchronous task to finish its work
// Asynchronous -> Not occuring in the same time
// -> Coordinaing behaviour of a program over a period of time
// Loading an image in the background while rest of the code executes makes it asynchronous but addEventListener or callback functions alone do not
///////////////////////////////////////

// WHAT ARE AJAX CALLS?
// (A)synchronous (J)avaScript (A)nd (X)ML
// Allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically
// CLIENT -----Request-----> WEB SERVER (Asking for some data - HTTP REQ)
// CLIENT <----Response----- WEB SERVER (Sending data back)
// GET to send data - POST to recieve data
// WEB SERVER is usually a WEB API
// An API (Application Programming Interface) is a piece of software that can be used by another piece of software, in order to allow applications to talk to each other
// URL -> API ENDPOINT
// Types include DOM API & GEOLOCATION API - Own class API
// Interested in an ONLINE API (Simply just called API or WEB API)
// An Online API is an application running on a server, that recieves requests for data, and sends data back as response
// We can build our own APIs (requires back-end development with node.js) or use 3rd-party APIs
// There is an API for everything
// AJAX ---> XML data format
// MOST POPULAR API data format --> JSON

// BASE URL: https://restcountries.com/v2/

/* How the web works:
First of all the url we are trying to communicate with is sent to the DNS for lookup which means it returns it to the client in a new form (Containing the IP address and the port number). Then a TCP/IP connection is established between the client and the web server which opens a socket that stays open for the whole transmission process. Its purpose is to break the date sent or recieved to small data packets for quicker conversion and the IP then sends and routes these packets accross the connection line (internet) to the client once again. Next, An HTTP request is sent from the client containing the HTTP method (GET/POST/...), the request target, and the HTTP version with a request body if the method is POST. Then an HTTP response is sent back containing the HTTP version, a status code and a status message along with the headers and the response body containing the details sent back. Index.html/JS/CSS are loaded using these requests (multiple at a time) Process is repeated for each file.
*/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
            </div>
        </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
};

/*
//////////////////////////////////////////

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send(); // Asynchronous non-blocking
  request.addEventListener('load', function () {
    console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);
  });
};

// One AJAX call that depends on another one
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const neighbour = data.borders?.[0];

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(request2.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('egypt');
// A lot of nested callbacks -> Callback hell
// setTimeout(() => {
//   console.log('1 sec');
//   setTimeout(() => {
//     console.log('2 sec');
//     setTimeout(() => {
//       console.log('3 sec');
//       setTimeout(() => {
//         console.log('4 sec');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

const request = fetch('https://restcountries.com/v2/name/portugal');
console.log(request);
// A promise is an object that is used as a placeholder for the future result of an asynchronous operation

// Promise Lifecycle
// PENDING ----ASYNC TASK-----> SETTLED (Fulfilled/Rejected)
// Fetch function builds promises and returns it for us to consume it

const getJSON = function (url. errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`); // Equivalent to rejecting a promise
    return response.json();
  });
};

const getCountry = function (country) {
  // In the beginning, promise is pending. However, let's assume success
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found!');
      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found');
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong ⚠ ${err.message}. Try Again!`);
    })
    .finally(() => {
      // Called whether promise fulfilled/rejected
      countriesContainer.style.opacity = 1;
    });
  // Errors propagate down the chain until they are caught
};

// const getCountry = function (country) {
// // In the beginning, promise is pending. However, let's assume success
// fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//     console.log(response);
//     if (!response.ok)
//         throw new Error(`Country not found (${response.status})`); // Equivalent to rejecting a promise
//     return response.json();
//     }) // Async function (Promise)
//     .then(data => {
//     renderCountry(data[0]);
//     const neighbour = data[0].borders?.[0];
//     return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//     console.error(`${err} 💥💥💥`);
//     renderError(`Something went wrong ⚠ ${err.message}. Try Again!`);
//     })
//     .finally(() => {
//     // Called whether promise fulfilled/rejected
//     countriesContainer.style.opacity = 1;
//     });
// // Errors propagate down the chain until they are caught
// };
// The only way that a fetch promise rejects is when the user loses internet connection
btn.addEventListener('click', function () {
  getCountry('portugal');
});
// then returns the success value of the promise
// Promises do not get rid of callbacks but of callback hell
getCountry('NOTFOUND'); */

// CC#1
// const whereAmI = function (lat, long) {
//   fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with geocoding ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`--${err.message}--`))
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// whereAmI(52.508, 13.381);
