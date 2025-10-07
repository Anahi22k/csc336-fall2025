
let button = document.querySelector("#getWeatherBtn");
let cityInput = document.querySelector("#cityInput");
let locationEl = document.querySelector("#location");
let tempEl = document.querySelector("#temperature");
let descEl = document.querySelector("#description");

button.addEventListener("click", getWeather);

async function getWeather() {
  let city = cityInput.value.trim(); // remove any extra spaces

  try {
    // send the API request
    let geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    let geoData = await geoRes.json();


    // extract city info
    let latitude = geoData.results[0].latitude; // grab first city result
    let longitude = geoData.results[0].longitude;
    let name = geoData.results[0].name;
    let country = geoData.results[0].country;

    // now fetch weather data
    let weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    let weatherData = await weatherRes.json();
    let weather = weatherData.current_weather;

    let temp = weather.temperature;
    let weatherCode = weather.weathercode;

    // convert Celsius → Fahrenheit
    temp = (temp * 9/5) + 32;

    let description = getWeatherDescription(weatherCode);

    // update page
    locationEl.textContent = `${name}, ${country}`;
    tempEl.textContent = `Temperature: ${temp.toFixed(1)}°F`;
    descEl.textContent = `Condition: ${description}`;

  } catch (error) {
    console.log("enter a valid city name");
    locationEl.textContent = "Please enter a valid city name!";
  }
}

// helper based on the code it returnes for description
function getWeatherDescription(code) {
  const codes = {
    0: "clear sky",
    1: "mainly clear",
    2: "partly cloudy",
    3: "overcast",
    45: "foggy",
    48: "fog",
    51: "light drizzle",
    61: "rainy",
    71: "snowy",
    95: "thunderstorm"
  };

}
