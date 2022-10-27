// fetch('https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=37187cef71fd2277911f35c446211345')

let Monday = document.querySelector(".constainer1");
let Tueday = document.querySelector(".constainer2");
let Wednesday = document.querySelector(".constainer3");
let Thursday = document.querySelector(".constainer4");
let Friday = document.querySelector(".constainer5");
let Saturday = document.querySelector(".constainer6");
let Sunday = document.querySelector(".constainer7");
let temperatureDes1 = document.querySelector(".temperature1");
let temperatureDes2 = document.querySelector(".temperature2");
let temperatureDes3 = document.querySelector(".temperature3");
let temperatureDes4 = document.querySelector(".temperature4");
let temperatureDes5 = document.querySelector(".temperature5");
let temperatureDes6 = document.querySelector(".temperature6");
let temperatureDes7 = document.querySelector(".temperature7");

let degrees1 = document.querySelector(".tempDegrees1");
let degrees2 = document.querySelector(".tempDegrees2");
let degrees3 = document.querySelector(".tempDegrees3");
let degrees4 = document.querySelector(".tempDegrees4");
let degrees5 = document.querySelector(".tempDegrees5");
let degrees6 = document.querySelector(".tempDegrees6");
let degrees7 = document.querySelector(".tempDegrees7");

let input = document.querySelector("#mySearch");
let cityName = document.querySelector(".mySearch");
let button = document.querySelector(".button");
let name = document.querySelector(".name");
let desc = document.querySelector(".desc");

button.addEventListener("click", function (cityName) {
  console.log(inputValue.value);
  localStorage.setItem("button", inputValue.value);
});
function weather(cityName) {
  cityName = "Denver";
  var key = "37187cef71fd2277911f35c446211345";

  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
      inputValue.value +
      "&APPID=${key}"
  )
    .then((res) => res.json())
    .then((data) => {
      let lon = data[0].lon;
      let lat = data[0].lat;
      console.log(data);
      degrees1.textContent = data.main;
      degrees2.textContent = data.main;
      degrees3.textContent = data.main;
      degrees4.textContent = data.main;
      degrees5.textContent = data.main;
      degrees6.textContent = data.main;
      degrees7.textContent = data.main;
      cityName = data[0].name;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&city&units=imperial&appid=${key}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          console.log(data.weather[0]);
          const { main, temp } = data.wind;

          // degrees.textContent=data.main.temp
          degrees1.textContent = data.main.temp;
          degrees2.textContent = data.main.temp;
          degrees3.textContent = data.main.temp;
          degrees4.textContent = data.main.temp;
          degrees5.textContent = data.main.temp;
          degrees6.textContent = data.main.temp;
          degrees7.textContent = data.main.temp;

          // temperatureDes1.textContent = data.weather[0].description;
          // temperatureDes2.textContent = data.weather[1].description;
          // temperatureDes3.textContent = data.weather[2].description;
          // temperatureDes4.textContent = data.weather[3].description;
          // temperatureDes5.textContent = data.weather[4].description;
          // temperatureDes6.textContent = data.weather[5].description;
          // temperatureDes7.textContent = data.weather[6].description;
        });
    })
    .catch(function (err) {
      // catch any errors
      console.log(err);
      return cityName;
    });
}

window.onload = function () {
  weather(cityName);
};
// function getForecast()
// let forcast = weatherBalloon().innerText = ''
