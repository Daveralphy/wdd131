const tempCelsius = parseFloat(document.getElementById('temp-static').textContent);
const windSpeedKMH = parseFloat(document.getElementById('wind-static').textContent);

const windChillElement = document.getElementById('windchill');

const calculateWindChill = (T, V) => 
    13.12 + (0.6215 * T) - (11.37 * Math.pow(V, 0.16)) + (0.3965 * T * Math.pow(V, 0.16));

if (tempCelsius <= 10 && windSpeedKMH > 4.8) {
    const windChill = calculateWindChill(tempCelsius, windSpeedKMH);
    
    windChillElement.textContent = `${windChill.toFixed(1)}°C`;
} else {
    windChillElement.textContent = "N/A";
}