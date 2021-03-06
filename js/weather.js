const API_KEY = "caedd478e3edd74d4d411a5168cbee52";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = `â ${data.weather[0].main} | ${data.main.temp}â | ð `;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
  weather.innerText = "ð«No Location Info";
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
