const API_KEY = "031c9ad40c6b38dee2d9c58e7cbc4c86";
const GEOCODING_API_URL = "https://api.openweathermap.org/geo/1.0/direct";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("location-input");
const weatherInfo = document.getElementById("weather-info");

function getWeatherData(location) {
  const timestamp = new Date().getTime();
  const storedData = JSON.parse(localStorage.getItem("weatherData"));
  const city =
    location.split(",")[0].trim().charAt(0).toUpperCase() +
    location.split(",")[0].trim().slice(1);
  if (
    storedData.location === city &&
    timestamp - storedData.timestamp < 7200000
  ) {
    // Less than 2 hours have passed since last API call, get data from localStorage
    displayWeatherData(storedData);
    console.log("local");
  } else {
    // More than 2 hours have passed since last API call, make new API call
    const geocodingUrl = `${GEOCODING_API_URL}?q=${location}&limit=1&appid=${API_KEY}`;
    fetch(geocodingUrl)
      .then((response) => response.json())
      .then((data) => {
        const lat = data[0].lat;
        const lon = data[0].lon;
        const weatherUrl = `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        return fetch(weatherUrl);
      })
      .then((response) => response.json())
      .then((data) => {
        const weatherData = {
          timestamp: timestamp,
          location: data.name,
          temperature: data.main.temp,
          description: data.weather[0].description,
        };

        localStorage.setItem("weatherData", JSON.stringify(weatherData));
        console.log("fetch");
        displayWeatherData(weatherData);
      });
  }
}

function displayWeatherData(data) {
  const html = `
    <h2>Weather in ${data.location}</h2>
    <p>Temperature: ${data.temperature}&deg;C</p>
    <p>Description: ${data.description}</p>
  `;
  weatherInfo.innerHTML = html;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const location = locationInput.value;
  getWeatherData(location);
});
