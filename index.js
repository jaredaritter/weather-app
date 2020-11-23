const KEY = '6351e9fb1889b2acebda2955c93fe660';
const city = 'Raleigh';
const units = 'imperial';

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${KEY}`
)
  .then((response) => response.json())
  .then(parseData)
  .catch(console.error);

function parseData(json) {
  const current = {
    location: json.name,
    temp: json.main.temp,
    feelsLike: json.main.feels_like,
    humidity: json.main.humidity,
    wind: json.wind.speed,
  };
  renderData(current);
}

function renderData(obj) {
  const locationHeader = document.querySelector('#location-header');
  const temp = document.querySelector('#temperature');
  const feelsLike = document.querySelector('#feels-like');
  const humidity = document.querySelector('#humidity');
  const wind = document.querySelector('#wind');

  locationHeader.textContent = obj.location + '?';
  temp.textContent = obj.temp + '°F';
  feelsLike.textContent = obj.feelsLike + '°F';
  humidity.textContent = obj.humidity + '%';
  wind.textContent = obj.wind + 'mph';
}
