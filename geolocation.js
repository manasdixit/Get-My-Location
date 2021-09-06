let userCoordinates = {
  latitude: "",
  longitude: "",
};

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(hasUserPosition);
  } else {
    console.error("Access Denied or geolocation not supported by your browser");
  }
}
getLocation();

function hasUserPosition(positions) {
  userCoordinates.latitude = positions.coords.latitude;
  userCoordinates.longitude = positions.coords.latitude;
}

console.log(userCoordinates);
