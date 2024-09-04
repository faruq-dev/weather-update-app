//All ID Selection
const cityName = document.getElementById('city-name');
const currentTemp = document.getElementById('temp');
const currentDateTime = document.getElementById('time-date');


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

    
};




navigator.geolocation.getCurrentPosition((position)=>{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude);
    // console.log(position);
});