let temperature = parseFloat(document.querySelector('#temperature').textContent);
let windSpeed = parseFloat(document.querySelector('#windSpeed').textContent);


if (temperature <= 50 && windSpeed > 3) {
    let windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    document.querySelector('#windChill').innerHTML = 'Wind Chill: ${windChill.toFixed(2)}°F';
 
}
else {
    document.querySelector('#windChill').innerHTML = 'Wind Chill: N/A';
}   


