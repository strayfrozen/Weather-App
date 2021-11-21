/*var getWeather = function(){ 

    fetch('https://api.weather.gov/points/39.7456,-97.0892').then(function(response) {
  response.json().then(function(data) {
    console.log(data);
  });
});

 };*/


//getWeather(); 

// var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}'

var startBtn = $('.search-btn')
var APIKey = 'ed04415a7bc100f9bfce31982e8ec5ed'
var fiveDayContainer = $('.five-day-container')

startBtn.on('click', function () {
  var city = $('.input-city').val()
  getWeather(city)
  getFiveDay(city)


  console.log(city);

  // save the searched city to local storage
})

//This function gets the current city weather data and appends it to the page

function getWeather(city) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey + '&units=imperial')
    .then((response) => response.json())
    .then(data => {
      console.log('current-day', data)
      $('#name').text("" + data.name)
      $('#temp').text("Temp: " + data.main.temp)
      $('#humidity').text("Humidity: " + data.main.humidity)
      $('#wind').text("Wind: " + data.wind.speed)



      getUvi(city,lat,lon);

      /* function getUvi(city) {
         fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon +'&exclude=' + city +'&appid=' + APIKey)
           .then((response) => response.json())
           .then(data => {
             console.log('current-uvi', data)
           })
         }
       })*/
    })
    .catch(err => alert('Wrong city name'))
}

//This function gets five day forcast data and appends it to page

function getFiveDay(city) {
  fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + APIKey + '&units=imperial')
    .then((response) => response.json())
    .then(data => {
      console.log('5-day', data.list)
      for (var i = 0; i < 5; i++) {
        console.log('first 5 days', data.list[i])
        var fiveDayCard = document.createElement('div')
        fiveDayCard.setAttribute('class', 'card col bg-primary text-white mb-3')
        fiveDayContainer.append(fiveDayCard)

        var fiveDayDate = document.createElement('p')
        fiveDayDate.textContent = '' + data.list[i].dt_txt 
        fiveDayCard.append(fiveDayDate)


        var fiveDayTemp = document.createElement('p')
        fiveDayTemp.textContent = 'Temp: ' + data.list[i].main.temp + ' F'
        fiveDayCard.append(fiveDayTemp)

        var fiveDayHumidity = document.createElement('p')
        fiveDayHumidity.textContent = 'Humidity: ' + data.list[i].main.humidity
        fiveDayCard.append(fiveDayHumidity)

        var fiveDayWind = document.createElement('p')
        fiveDayWind .textContent = 'Wind: ' + data.list[i].wind.speed
        fiveDayCard.append(fiveDayWind )



      }
    })
}

function getUvi(city,lat,lon) {
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=' + city + '&appid=' + APIKey)
    .then((response) => response.json())
    .then(data => {
      console.log('current-uvi', data)
    })
}




// function to get local storage and then for each item in local storage you want to create a button with an id of the city name and put an on click listener onto each button to get the current and 5day to display

















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