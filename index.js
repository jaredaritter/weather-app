const KEY = '6351e9fb1889b2acebda2955c93fe660';
const defaultCity = 'raleigh';
const units = 'imperial';

// const searchButton = document.querySelector('#search-button');
// searchButton.addEventListener('click', handleClick);

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

getData();

function getData(location = defaultCity) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=${KEY}`
  )
    .then((response) => response.json())
    .then(parseData)
    .catch(console.error);
}

// function handleClick(e) {
//   e.preventDefault();
//   const input = document.querySelector('input');
//   getData(input.value);
// }

function handleSubmit(e) {
  e.preventDefault();
  getData(form.location.value);
}

function parseData(json) {
  const current = {
    location: json.name ? json.name : 'error',
    temp: json.main.temp ? json.main.temp : 'error',
    feelsLike: json.main.feels_like ? json.main.feels_like : 'error',
    humidity: json.main.humidity ? json.main.humidity : 'error',
    wind: json.wind.speed ? json.wind.speed : 'error',
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
