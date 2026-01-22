const temperature = 24; // in Celsius
const windSpeed = 16; // in km/h
const weatherConditions = 'Drizzle';

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * windSpeed**0.16 + 0.3965 * temperature * windSpeed**0.16;
};

let windChill = 'N/A';
if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed);
}

document.querySelector('#temperature').innerHTML = `${temperature} ºC`;
document.querySelector('#conditions').innerHTML = `${weatherConditions}`;
document.querySelector('#wind').innerHTML = `${windSpeed} km/h`;
document.querySelector('#windChill').innerHTML = `${windChill}`;