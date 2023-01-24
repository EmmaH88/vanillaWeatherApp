function displayTemperature(response) {
  console.log(response.data);
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);

  let city = document.querySelector("#city");
  city.innerHTML = response.data.name;

  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;

  let maxTemp = document.querySelector("#maxTemp");
  maxTemp.innerHTML = Math.round(response.data.main.temp_max);

  let minTemp = document.querySelector("#minTemp");
  minTemp.innerHTML = Math.round(response.data.main.temp_min);

  let feelsLike = document.querySelector("#feelsLike");
  feelsLike.innerHTML = Math.round(response.data.main.feels_like);

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;

  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);

  let date = document.querySelector("#date");
  date.innerHTML = formattedDate(response.data.dt * 1000);
}

function formattedDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
}

let apiKey = "85bcdd2ad2afb7ce15a8242b1ff12dc1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=manchester&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
