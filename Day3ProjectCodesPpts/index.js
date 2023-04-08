const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "cea636c2882881c2fea8c4b273a0b09e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

//  console.log(weather_data);

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':{
            weather_img.src = "/Images/cloudicon.jpg";
            const bg=document.querySelector('body')
            bg.style.backgroundImage=`url(./Images/scatteredClouds.jpg)`
        }
            break;

        case 'Clear':{
            weather_img.src = "/Images/Sun.png";
            const bg=document.querySelector('body')
            bg.style.backgroundImage=`url(./Images/weather.jpg)`
            
        }
            break;

        case 'Rain':{
            weather_img.src = "/Images/Rain.png";
            const bg=document.querySelector('body')
            bg.style.backgroundImage=`url(./Images/Rain.jpg)`
        }
            break;

        case 'Mist':{
            weather_img.src = "/Images/Mist.png";
            const bg=document.querySelector('body')
            bg.style.backgroundImage=`url(./Images/Smoke.jpg)`
        }
        break;

        case 'Snow':{
            weather_img.src = "/Images/Snow.jpg";
            const bg=document.querySelector('body')
            bg.style.backgroundImage=`url(./Images/Smoke.jpg)`
        }
            break;

        case 'Smoke':{
        weather_img.src = "/Images/cloudicon.jpg";
        const bg=document.querySelector('body')
        bg.style.backgroundImage=`url(./Images/Smoke.jpg)`
       
       
        }

         break;

    }

    // console.log(weather_data);
}



searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});