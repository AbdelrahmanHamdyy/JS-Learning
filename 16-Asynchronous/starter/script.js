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
// Types include DOM API & GEOLOCATION API - Own class API
// Interested in an ONLINE API (Simply just called API or WEB API)
// An Online API is an application running on a server, that recieves requests for data, and sends data back as response
// We can build our own APIs (requires back-end development with node.js) or use 3rd-party APIs
// There is an API for everything
// AJAX ---> XML data format
// MOST POPULAR API data format --> JSON

// BASE URL: https://restcountries.com/v2/

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////////////////////
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  // URL -> API ENDPOINT
  request.send(); // Asynchronous non-blocking
  request.addEventListener('load', function () {
    console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
    <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('egypt');
getCountryData('usa');
