//All ID Selection
const cityName = document.getElementById('city-name');
const currentTemp = document.getElementById('temp');
const currentDateTime = document.getElementById('time-date');
const weatherIcon = document.getElementById('weather-icon');
const bgImage = document.getElementById('bg-image')


const API_KEY = '5cf4a02746088171dd0cf1df5d1db703';
const URL = 'https://api.openweathermap.org/data/2.5/weather';



const getWeather = async (lat, lon)=>{
    const response = await fetch (`${URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    console.log(data);

    cityName.innerHTML = `<i class="fa-solid fa-location-dot mr-4 mb-5"></i>${data?.name}`;
    currentTemp.innerText = `${Math.round(data?.main?.temp)}°`;
    if (data?.main?.temp > 30){
        currentTemp.style.color = 'orange'
    } else if (data?.main?.temp > 20) {
        currentTemp.style.color = 'skyblue'
    } else {
        currentTemp.style.color = 'white'
    };

    switch(data?.weather[0]?.main){
        case 'Haze':
            weatherIcon.innerHTML = `<i class="fa-solid fa-smog"></i>`;
            bgImage.style.backgroundImage = `url('/assets/backgrounds/few-clouds.jpg')`;
            break;

        case 'Clear':
            weatherIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            bgImage.style.backgroundImage = `url('/assets/backgrounds/clear-sky.jpg')`;
            break;

        case 'Rain':
            weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
            bgImage.style.backgroundImage = `url('/assets/backgrounds/shower-rain.jpg')`;
            break;

        case 'Thunderstorm':
            weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
            bgImage.style.backgroundImage = `url('/assets/backgrounds/thunderstorm-2.jpg')`;
            break;

        case 'Clouds':
            weatherIcon.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
            bgImage.style.backgroundImage = `url('/assets/backgrounds/clouds.jpg')`;
            break;

        case 'Fog':
            weatherIcon.innerHTML = `<i class="bi bi-cloud-fog2-fill"></i>`;
            bgImage.style.backgroundImage = `url('/assets/backgrounds/mist.jpg')`;
            break;
            
        case 'Snow':
            weatherIcon.innerHTML = `<i class="bi bi-cloud-snow-fill"></i>`;
            bgImage.style.backgroundImage = `url('/assets/backgrounds/snow.jpg')`;
            break;

        default :
            weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-sun-rain"></i>`;
            bgImage.style.backgroundImage = `url('/assets/backgrounds/honza-reznik-tUsIUWNEtsQ-unsplash.jpg')`;

    }

};


navigator.geolocation.getCurrentPosition((position)=>{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude);
    // console.log(position);
});