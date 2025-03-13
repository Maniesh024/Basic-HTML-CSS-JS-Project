 
async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "One Call API 3.0."; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found.");
            return;
        }

        document.getElementById("city-name").innerText = `Weather in ${data.name}`;
        document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById("weather-description").innerText = `Condition: ${data.weather[0].description}`;
    } catch (error) {
        alert("Error fetching weather data.");
        console.error(error);
    }
}
