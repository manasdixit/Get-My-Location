import { renderCountry } from "./renderCountry.js";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

export const whereAmI = async function (latitude, longitude) {
  try {
    const res = await fetch(
      `https://geocode.xyz/${latitude},${longitude}?geoit=json`
    );
    if (!res.ok) throw new Error("🛑 Problem Getting location data !!");
    // console.log(res);

    const data = await res.json();
    // console.log(data);

    var message = `You are in ${data.region} `;
    countriesContainer.insertAdjacentText("beforeend", message);

    const resCon = await fetch(
      `https://restcountries.eu/rest/v2/name/${data.country}`
    );
    if (!resCon.ok) throw new Error("🛑Problem Getting Country data !!");

    const dataCon = await resCon.json();
    // console.log(dataCon);

    await renderCountry(dataCon[0]);
    btn.disabled = true;
    btn.style.opacity = 0;
  } catch (err) {
    // console.log(`Oops !!  ${err}`);
    countriesContainer.insertAdjacentHTML("afterbegin", `Oops !! ${err}`);
    countriesContainer.style.opacity = 1;
  }
};
