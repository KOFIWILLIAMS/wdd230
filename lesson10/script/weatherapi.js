// select HTML elements in the document
// 9182590c6a24d9a7b60fd2d065a2b4b1
// a9f1b75e5d0407288f66ccf14fed5458
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}



const currenttemp = document.querySelector('#current-temp');
const weathericon = document.querySelector('#weather-icon');
const captiondesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=9182590c6a24d9a7b60fd2d065a2b4b1"
//const url = "https://api.openweathermap.org/data/2.5/weather?q=Accra&units=metric&appid=9182590c6a24d9a7b60fd2d065a2b4b1"

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); //
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
    currenttemp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}</strong>`

    const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    const description = weatherdata.weather[0].description;
    weathericon.setAttribute('src', iconsrc);
    weathericon.setAttribute('alt', description);
    weathericon.setAttribute('loading', 'lazy')
    captiondesc.textContent = description.toUpperCase();
}

