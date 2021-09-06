"use strict";
let coordinates = {
  getLatitude: 0,
  getLongitude: 0,
};

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data) {
  const html = `
      <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} Million people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
      </article>
    `;
  countriesContainer.insertAdjacentHTML("afterbegin", html);
  countriesContainer.style.opacity = 1;
};

// const whereAmI = function (latitude, longitude) {

//   fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       var message = `You are in ${data.region} `;
//       countriesContainer.insertAdjacentText('beforeend', message);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0]);
//     })
//     .catch(err => console.log(err))
//     .catch(err => {
//       console.log(`Something Went Wrong !!`, console.err);
//     });
// };

const whereAmI = async function (latitude, longitude) {
  const res = await fetch(
    `https://geocode.xyz/${latitude},${longitude}?geoit=json`
  );
  // console.log(res);

  const data = await res.json();
  // console.log(data);

  var message = `You are in ${data.region} `;
  countriesContainer.insertAdjacentText("beforeend", message);

  const resCon = await fetch(
    `https://restcountries.eu/rest/v2/name/${data.country}`
  );
  const dataCon = await resCon.json();
  // console.log(dataCon);

  await renderCountry(dataCon[0]);
  btn.disabled = true;
  btn.style.opacity = 0;
};

// const latitude = prompt('Enter latitude');
// const longitude = prompt('Enter longitude');
// const coordinates = [latitude, longitude];

var x = document.getElementById("demo");

(async function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
})();

function showPosition(position) {
  coordinates.getLatitude = position.coords.latitude;
  coordinates.getLongitude = position.coords.longitude;
}

btn.addEventListener("click", () =>
  whereAmI(coordinates.getLatitude, coordinates.getLongitude)
);
