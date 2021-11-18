var city= "";

console.log('hello');

var getWeather = function(){ 

    fetch('https://api.weather.gov/points/39.7456,-97.0892').then(function(response) {
  response.json().then(function(data) {
    console.log(data);
  });
});

 };


getWeather(); 

/*var apiUrl = getWeather({

    fetch('api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ed04415a7bc100f9bfce31982e8ec5ed')
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(err => alert('Wrong city name'))

})


getWeather();*/















/*GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city*/