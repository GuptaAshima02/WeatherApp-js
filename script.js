// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
const input = document.getElementById("input");
const submitBtn = document.getElementById("submit");

const cityName = document.getElementById("cityname");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const error = document.getElementById("error");

function getWeather(namee) {
  fetch( `https://api.openweathermap.org/data/2.5/weather?q=${namee}&appid=dda26109be2e21c827819fa96320454e&units=metric`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      cityName.textContent = data.name;
      temp.textContent = `Temperature: ${data.main.temp}°C`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
      error.textContent = "";
    })
    .catch(errorr => {
      cityName.textContent = "";
      temp.textContent = "";
      humidity.textContent = "";
      wind.textContent = "";
      error.textContent = "City not found.";
    });
}
getWeather("jammu");
submitBtn.addEventListener('click', () => {
    const city = input.value.trim();
    if (city) {
        getWeather(city);
        input.value = '';
    }
});