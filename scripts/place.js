const temperature = 28;
const windspeed = 10;

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}
const windChill = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = ${ calculatorWindChill(temperature, windSpeed) } °C;
} else {
    windChill.textContent = "N/A";
}

// Footer year
document.querySelector("#year").textContent =
    new Date().getFullYear();


//Last modified date
document.querySelector("#lastModified").textContent =
    Last Modified: ${ document.lastModified };

