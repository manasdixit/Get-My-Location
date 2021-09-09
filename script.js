import { whereAmI } from "./reverseGeoCoding.js";

let coordinates = {
  getLatitude: 0,
  getLongitude: 0,
};

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

(function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
})();

var x = document.getElementById("demo");

function showPosition(position) {
  coordinates.getLatitude = position.coords.latitude;
  coordinates.getLongitude = position.coords.longitude;
}

btn.addEventListener("click", function () {
  whereAmI(coordinates.getLatitude, coordinates.getLongitude);
});

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
