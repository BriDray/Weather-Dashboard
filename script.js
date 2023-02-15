var fetchButton = document.getElementById('fetch-button');

// uses jquery to submit form when enter key is used.
$(document).ready(() => {
  $('.info').on('submit', () => {
    // prevents default
    return false;
  });
});
$('.info').keypress((e) => {

  // enter key corresponds to #13
  if (e.which === 13) {
    $('.info').submit();
  }

});


function getApi() {
  // fetch request gets a list of all 
  var cityName = document.querySelector('.cityName').value
  let requestcityUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=imperial&appid=35fcbf0150ea112152a8c8cacc79acc7';
  let requestCurrentcityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=35fcbf0150ea112152a8c8cacc79acc7';
  var searchCity = 
  fetch(requestCurrentcityUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data){
    console.log('currentDay', data)

  })

  fetch(requestcityUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (i = 2; i < data.list.length; i = i + 8) {
        console.log(data.list[i].main.temp + 'F')
        // current Day
        console.log($('#currentdate').text(data.list[0].dt_txt))
        console.log($('#temp').text(data.list[0].main.temp + 'F'))
        console.log($('#maxtemp').text(data.list[0].main.temp_max + 'F'))
        console.log($('#mintemp').text(data.list[0].main.temp_min + 'F'))
        console.log($('#humidity').text(data.list[0].main.humidity + '%'))
        console.log($('#windspeed').text(data.list[0].wind.speed + 'mph'))
        // Day 1
        console.log($('#date1').text(data.list[5].dt_txt))
        console.log($('#maxTemp1').text(data.list[5].main.temp_max + 'F'))
        console.log($('#minTemp1').text(data.list[5].main.temp_min + 'F'))
        console.log($('#humidity1').text(data.list[5].main.humidity + '%'))
        console.log($('#windSpeed1').text(data.list[5].wind.speed + 'mph'))
        // Day 2
        console.log($('#date2').text(data.list[13].dt_txt))
        console.log($('#maxTemp2').text(data.list[13].main.temp_max + 'F'))
        console.log($('#minTemp2').text(data.list[13].main.temp_min + 'F'))
        console.log($('#humidity2').text(data.list[13].main.humidity + '%'))
        console.log($('#windSpeed2').text(data.list[13].wind.speed + 'mph'))
        // Day 3
        console.log($('#date3').text(data.list[20].dt_txt))
        console.log($('#maxTemp3').text(data.list[20].main.temp_max + 'F'))
        console.log($('#minTemp3').text(data.list[20].main.temp_min + 'F'))
        console.log($('#humidity3').text(data.list[20].main.humidity + '%'))
        console.log($('#windSpeed3').text(data.list[20].wind.speed + 'mph'))
        // Day 4
        console.log($('#date4').text(data.list[26].dt_txt))
        console.log($('#maxTemp4').text(data.list[26].main.temp_max + 'F'))
        console.log($('#minTemp4').text(data.list[26].main.temp_min + 'F'))
        console.log($('#humidity4').text(data.list[26].main.humidity + '%'))
        console.log($('#windSpeed4').text(data.list[26].wind.speed + 'mph'))
        // Day 5
        console.log($('#date5').text(data.list[32].dt_txt))
        console.log($('#maxTemp5').text(data.list[32].main.temp_max + 'F'))
        console.log($('#minTemp5').text(data.list[32].main.temp_min + 'F'))
        console.log($('#humidity5').text(data.list[32].main.humidity + '%'))
        console.log($('#windSpeed5').text(data.list[32].wind.speed + 'mph'))
      }
      console.log(data)
  
    });
    var localStorage = window.localStorage;
var seeWeatherBtn = document.getElementById("seeWeather");
var cityNames = []
if (localStorage.getItem('citySearch')) {
  console.log(cityNames)
  cityNames = JSON.parse(localStorage.getItem('citySearch'));
  cityNames.push(cityName)
  localStorage.setItem('citySearch', JSON.stringify(cityNames));
  // add for loop for Saved Search to load upon page load (from local)
  for (var i = 0; i < cityNames.length; i++) {
    var savedSearch = document.createElement("div");
    savedSearch.classList.add("newCity");
    savedSearch.textContent = cityNames[i];

  }
} else {
 
  cityNames.push(cityName)
  localStorage.setItem('citySearch', JSON.stringify(cityNames));
  
}


};
// event listener for clicking the fetchButton to respond to click to get API
fetchButton.addEventListener('click', getApi);