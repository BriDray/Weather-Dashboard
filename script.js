var fetchButton = document.getElementById('fetch-button');
var cityNames = []
var recentSearch = document.getElementById('recentSearch')
var localStorage = window.localStorage;
const currentWeatherImg = document.querySelector("#currentDayImg");
const forecastD1 = document.querySelector(".day1");
const forecastD2 = document.querySelector(".day2");
const forecastD3 = document.querySelector(".day3");
const forecastD4 = document.querySelector(".day4");
const forecastD5 = document.querySelector(".day5");
var cityNameEL = document.querySelector('.insertCityName')


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
  // for the 5 day forecast
  let requestcityUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=imperial&appid=35fcbf0150ea112152a8c8cacc79acc7';
  // for the current day forecast
  let requestCurrentcityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=35fcbf0150ea112152a8c8cacc79acc7';
  // Current day Fetch request
  fetch(requestCurrentcityUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('currentDay', data)
      // current Day
      // console.log($(currentWeatherImg)(data.weather[0].icon))
      currentWeatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      cityNameEL.innerHTML = `${data.name}, ${data.sys.country}`
      console.log($('#temp').text(data.main.temp + 'F'))
      console.log($('#weatherDescription').text(data.weather[0].description))
      console.log($('#maxtemp').text(data.main.temp_max + 'F'))
      console.log($('#mintemp').text(data.main.temp_min + 'F'))
      console.log($('#humidity').text(data.main.humidity + '%'))
      console.log($('#windspeed').text(data.wind.speed + 'mph'))

    })
  // 5 day forecast fetch request
  fetch(requestcityUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (i = 2; i < data.list.length; i = i + 8) {
        console.log(data.list[i].main.temp + 'F')
        // Day 1
        console.log($('#date1').text(data.list[2].dt_txt.split(' ')[0]))
        console.log($('#weatherDesc1').text(data.list[2].weather[0].description))
        console.log($('#maxTemp1').text(data.list[2].main.temp_max + 'F'))
        console.log($('#minTemp1').text(data.list[2].main.temp_min + 'F'))
        console.log($('#humidity1').text(data.list[2].main.humidity + '%'))
        console.log($('#windSpeed1').text(data.list[2].wind.speed + 'mph'))
        // Day 2
        console.log($('#date2').text(data.list[10].dt_txt.split(' ')[0]))
        console.log($('#weatherDesc2').text(data.list[10].weather[0].description))
        console.log($('#maxTemp2').text(data.list[10].main.temp_max + 'F'))
        console.log($('#minTemp2').text(data.list[10].main.temp_min + 'F'))
        console.log($('#humidity2').text(data.list[10].main.humidity + '%'))
        console.log($('#windSpeed2').text(data.list[10].wind.speed + 'mph'))
        // Day 3
        console.log($('#date3').text(data.list[18].dt_txt.split(' ')[0]))
        console.log($('#weatherDesc3').text(data.list[18].weather[0].description))
        console.log($('#maxTemp3').text(data.list[18].main.temp_max + 'F'))
        console.log($('#minTemp3').text(data.list[18].main.temp_min + 'F'))
        console.log($('#humidity3').text(data.list[18].main.humidity + '%'))
        console.log($('#windSpeed3').text(data.list[18].wind.speed + 'mph'))
        // Day 4
        console.log($('#date4').text(data.list[26].dt_txt.split(' ')[0]))
        console.log($('#weatherDesc4').text(data.list[26].weather[0].description))
        console.log($('#maxTemp4').text(data.list[26].main.temp_max + 'F'))
        console.log($('#minTemp4').text(data.list[26].main.temp_min + 'F'))
        console.log($('#humidity4').text(data.list[26].main.humidity + '%'))
        console.log($('#windSpeed4').text(data.list[26].wind.speed + 'mph'))
        // Day 5
        console.log($('#date5').text(data.list[34].dt_txt.split(' ')[0]))
        console.log($('#weatherDesc5').text(data.list[34].weather[0].description))
        console.log($('#maxTemp5').text(data.list[34].main.temp_max + 'F'))
        console.log($('#minTemp5').text(data.list[34].main.temp_min + 'F'))
        console.log($('#humidity5').text(data.list[34].main.humidity + '%'))
        console.log($('#windSpeed5').text(data.list[34].wind.speed + 'mph'))
      }
      console.log(data)

    });
  var seeWeatherBtn = document.getElementById("seeWeather");
  cityNames.push(cityName)
  localStorage.setItem('citySearch', JSON.stringify(cityNames));
  renderSearch()

};
// event listener for clicking the fetchButton to respond to click to get API
fetchButton.addEventListener('click', getApi);



function renderSearch (){
  recentSearch.innerHTML = ""
// recent searches list
if (localStorage.getItem('citySearch')) {
  console.log(cityNames)
    cityNames = JSON.parse(localStorage.getItem('citySearch'));
    localStorage.setItem('citySearch', JSON.stringify(cityNames));

  for (var i = cityNames.length < 5 ? 0 : cityNames.length - 5; i < cityNames.length; i++) {
    var prevSearch = document.createElement('p');
    prevSearch.innerHTML = cityNames[i];
    prevSearch.addEventListener("click", function(event){
      var cityInput = document.getElementById('cityName')
      cityInput.value = event.target.textContent;
      

    })
    recentSearch.append(prevSearch)
  }
}} 

renderSearch()