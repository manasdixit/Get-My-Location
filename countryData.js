const getMyLocation = function (latitude, longitude) {
  fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Problem with the geo-coding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.region} `);
    })
    .catch(err => {
      console.error(`💥 ${err.message} 💥`);
    });
};

getMyLocation(24.6017668, 73.7263151);
