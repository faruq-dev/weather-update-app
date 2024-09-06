//All ID Selection
const cityName = document.getElementById("city-name");
const currentTemp = document.getElementById("temp");
const currentDateTime = document.getElementById("time-date");
const weatherIcon = document.getElementById("weather-icon");
const bgImage = document.getElementById("bg-image");
const formData = document.getElementById("form-data");
// console.dir(formData);

const weatherConditionTitle = document.getElementById(
  "weather-condition-title"
);
const tempMax = document.getElementById("temp-max");
const tempMin = document.getElementById("temp-min");
const humidity = document.getElementById("humidity");
const clouds = document.getElementById("clouds");
const wind = document.getElementById("wind");

const API_KEY = "5cf4a02746088171dd0cf1df5d1db703";
const URL = "https://api.openweathermap.org/data/2.5/weather";



const getWeatherByLocation = async (lat, lon) => {
  const response = await fetch(
    `${URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  // console.log(data);

  cityName.innerHTML = `<i class="fa-solid fa-location-dot mr-4 mb-5"></i>${data?.name}`;

  currentTemp.innerText = `${Math.round(data?.main?.temp)}°`;
  if (data?.main?.temp > 30) {
    currentTemp.style.color = "orange";
  } else if (data?.main?.temp > 20) {
    currentTemp.style.color = "skyblue";
  } else {
    currentTemp.style.color = "white";
  }

  switch (data?.weather[0]?.main) {
    case "Haze":
      weatherIcon.innerHTML = `<i class="fa-solid fa-smog"></i>`;
      bgImage.style.backgroundImage = `url('/assets/backgrounds/few-clouds.jpg')`;
      weatherConditionTitle.innerHTML = `THE WEATHER IS <span class="text-yellow-400">HAZE</span>`;
      break;

    case "Clear":
      weatherIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`;
      bgImage.style.backgroundImage = `url('/assets/backgrounds/clear-sky.jpg')`;
      weatherConditionTitle.innerHTML = `THE WEATHER IS <span class="text-yellow-400">CLEAR</span>`;
      break;

    case "Rain":
      weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
      bgImage.style.backgroundImage = `url('/assets/backgrounds/shower-rain.jpg')`;
      weatherConditionTitle.innerHTML = `THE WEATHER IS <span class="text-yellow-400">RAINY</span>`;
      break;

    case "Thunderstorm":
      weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
      bgImage.style.backgroundImage = `url('/assets/backgrounds/thunderstorm-2.jpg')`;
      weatherConditionTitle.innerHTML = `THE WEATHER IS <span class="text-yellow-400">THUNDERSTORM</span>`;
      break;

    case "Clouds":
      weatherIcon.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
      bgImage.style.backgroundImage = `url('/assets/backgrounds/clouds.jpg')`;
      weatherConditionTitle.innerHTML = `THE WEATHER IS <span class="text-yellow-400">CLOUDY</span>`;
      break;

    case "Fog":
      weatherIcon.innerHTML = `<i class="bi bi-cloud-fog2-fill"></i>`;
      bgImage.style.backgroundImage = `url('/assets/backgrounds/mist.jpg')`;
      weatherConditionTitle.innerHTML = `THE WEATHER IS <span class="text-yellow-400">FOGGY</span>`;
      break;

    case "Snow":
      weatherIcon.innerHTML = `<i class="bi bi-cloud-snow-fill"></i>`;
      bgImage.style.backgroundImage = `url('/assets/backgrounds/snow.jpg')`;
      weatherConditionTitle.innerHTML = `THE WEATHER IS <span class="text-yellow-400">SNOWY</span>`;
      break;

    default:
      weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-sun-rain"></i>`;
      bgImage.style.backgroundImage = `url('/assets/backgrounds/honza-reznik-tUsIUWNEtsQ-unsplash.jpg')`;
      weatherConditionTitle.innerHTML = `THE WEATHER IS <span class="text-yellow-400">NORMAL</span>`;
  }

  // Right Area
  tempMax.innerText = `${data?.main?.temp_max}°`;
  tempMin.innerText = `${data?.main?.temp_min}°`;
  humidity.innerText = `${data?.main?.humidity}%`;
  clouds.innerText = `${data?.clouds?.all}%`;
  wind.innerText = `${data?.wind?.speed}km/h`;
};


navigator.geolocation.getCurrentPosition((position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  getWeatherByLocation(latitude, longitude);
  // console.log(position);
});




// Searching by City Names
formData.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = e.target["search-input"].value.trim();
  // console.log(city);

  if (city === "" || !isNaN(city)) {
    alert("Enter a Valid City Name");
    return;
  }

  getWeatherbyCityName(city);
  e.target["search-input"].value = "";
});



const getWeatherbyCityName = async (city) => {
  const response = await fetch(
    `${URL}?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();

  if (data.cod === "404") {
    alert("Not a valid city name. Please try again.");
    return; // Exit the function if city is invalid
  }

  // console.log(data);

  cityName.innerHTML = `<i class="fa-solid fa-location-dot mr-4 mb-5"></i>${data?.name}`;
  currentTemp.innerText = `${Math.round(data?.main?.temp)}°`;
  if (data?.main?.temp > 30) {
    currentTemp.style.color = "orange";
  } else if (data?.main?.temp > 20) {
    currentTemp.style.color = "skyblue";
  } else {
    currentTemp.style.color = "white";
  }

  switch (data?.weather[0]?.main) {
    case "Haze":
      weatherIcon.innerHTML = `<i class="fa-solid fa-smog"></i>`;
      bgImage.style.backgroundImage = `url('/assets/backgrounds/few-clouds.jpg')`;
      weatherConditionTitle.innerHTML = `THE WEATHER IS <span class="text-yellow-400">HAZE</span>`;
      break;

    case "Clear":
      weatherIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`;
      bgImage.style.backgroundImage = `url('/assets/backgrounds/clear-sky.jpg')`;
      weatherConditionTitle.innerHTML = `THE WEATHER IS <span class="text-yellow-400">CLEAR</span>`;
      break;

    case "Rain":
      weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
      bgImage.style.backgroundImage = `url('/assets/backgrounds/shower-rain.jpg')`;
      weatherConditionTitle.innerHTML = `THE WEATHER IS <span class="text-yellow-400">RAINY</span>`;
      break;

    case "Thunderstorm":
      weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
      bgImage.style.backgroundImage = `url('/assets/backgrounds/thunderstorm-2.jpg')`;
      weatherConditionTitle.innerHTML = `THE WEATHER IS <span class="text-yellow-400">THUNDERSTORM</span>`;
      break;

    case "Clouds":
      weatherIcon.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
      bgImage.style.backgroundImage = `url('/assets/backgrounds/clouds.jpg')`;
      weatherConditionTitle.innerHTML = `THE WEATHER IS <span class="text-yellow-400">CLOUDY</span>`;
      break;

    case "Fog":
      weatherIcon.innerHTML = `<i class="bi bi-cloud-fog2-fill"></i>`;
      bgImage.style.backgroundImage = `url('/assets/backgrounds/mist.jpg')`;
      weatherConditionTitle.innerHTML = `THE WEATHER IS <span class="text-yellow-400">FOGGY</span>`;
      break;

    case "Snow":
      weatherIcon.innerHTML = `<i class="bi bi-cloud-snow-fill"></i>`;
      bgImage.style.backgroundImage = `url('/assets/backgrounds/snow.jpg')`;
      weatherConditionTitle.innerHTML = `THE WEATHER IS <span class="text-yellow-400">SNOWY</span>`;
      break;

    default:
      weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-sun-rain"></i>`;
      bgImage.style.backgroundImage = `url('/assets/backgrounds/honza-reznik-tUsIUWNEtsQ-unsplash.jpg')`;
      weatherConditionTitle.innerHTML = `THE WEATHER IS <span class="text-yellow-400">NORMAL</span>`;
  }

  // Right Area
  tempMax.innerText = `${data?.main?.temp_max}°`;
  tempMin.innerText = `${data?.main?.temp_min}°`;
  humidity.innerText = `${data?.main?.humidity}%`;
  clouds.innerText = `${data?.clouds?.all}%`;
  wind.innerText = `${data?.wind?.speed}km/h`;
};
