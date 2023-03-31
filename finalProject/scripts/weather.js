const currentTemp = document.querySelector('#currentTemp');
const currentcond = document.querySelector('#currentCondition');
const winds = document.querySelector('#windSpeed');
const windc = document.querySelector('#windChill');
const weatherIcon = document.querySelector('#weathericon');
 const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Accra&units=metric&appid=9182590c6a24d9a7b60fd2d065a2b4b1"

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
} 
  
apiFetch();

function displayResults(weatherdata) {
    console.log(weatherdata)
    currentTemp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}°C</strong>`
    winds.innerHTML = `<strong>${weatherdata.wind.speed}</strong>`


    const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    const description = weatherdata.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', description);
    currentcond.innerHTML = `<strong>${description.toUpperCase()}</strong>`;
}