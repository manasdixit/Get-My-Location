'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data) {
  //d
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
  countriesContainer.insertAdjacentHTML('afterbegin', html);
  countriesContainer.style.opacity = 1;
};

const whereAmI = function (latitude, longitude) {
  fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      var message = `You are in ${data.region} `;
      countriesContainer.insertAdjacentText('beforeend', message);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
    })
    .catch(err => console.log(err))
    .catch(err => {
      console.log(`Something Went Wrong !!`, console.err);
    });
};
// const latitude = prompt('Enter latitude');
// const longitude = prompt('Enter longitude');
// const coordinates = [latitude, longitude];

btn.addEventListener('click', () => whereAmI(-22.908333, -43.196388));
