// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
const input = document.getElementById("input");
const submitBtn = document.getElementById("submit");

const cityName = document.getElementById("city-name");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");

function getWeather(cityName) {
  fetch( `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=dda26109be2e21c827819fa96320454e&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found.");
      }
      return response.json();
    })
    .then(data => {
    //   console.log(data);
      cityName.textContent = data.name;
      temp.textContent = `Temperature: ${data.main.temp}°C`;
      humidity.textContent = `Humidity: ${data.main.temp}%`;
      wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    })
    .catch(error =>{
        console.error(error);
    })
}
submitBtn.addEventListener('click', () => {
    const city = input.value.trim();
    if (city) {
        getWeather(city);
        input.value = '';
        // console.log(getWeather(city))
    }
});