let button = document.querySelector(".button");
let inputValue = document.querySelector(".inputValue");
let name = document.querySelector(".name");
let desc = document.querySelector(".desc");
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
let date1 = document.querySelector(".date1");
let date2 = document.querySelector(".date2");
let date3 = document.querySelector(".date3");
let date4 = document.querySelector(".date4");
let date5 = document.querySelector(".date5");
button.addEventListener("click", () => {
  localStorage.setItem("button", inputValue.value);
  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
      inputValue.value +
      "&APPID=37187cef71fd2277911f35c446211345"
  )
    .then((response) => response.json())
    .then((data) => {
      //   let nameValue = data["name"];

      //   name.innerHTML = nameValue;
      console.log(data);

      //   fetch(
      //     "https://api.openweathermap.org/data/2.5/weather?q=" +
      //       inputValue.value +
      //       "&appid=37187cef71fd2277911f35c446211345"
      //   )
      //     .then((response) => response.json())
      //     .then((data) => {
      //       let tempValue = data["main"]["temp"];
      //       let descValue = data["weather"][0]["description"];
      //       let cityName = inputValue.value;
      //       degrees1.innerHTML = tempValue;
      //       temperatureDes1.innerHTML = descValue;
      //       console.log(data);

      fetch(
        "http://api.openweathermap.org/data/2.5/forecast?q=" +
          inputValue.value +
          "&appid=37187cef71fd2277911f35c446211345"
      )
        .then((response) => response.json())

        .then((data) => {
          let cityName = data["city"]["name"];
          let descValue1 = data["list"][2]["weather"][0]["description"];
          let descValue2 = data["list"][10]["weather"][0]["description"];
          let descValue3 = data["list"][18]["weather"][0]["description"];
          let descValue4 = data["list"][26]["weather"][0]["description"];
          let descValue5 = data["list"][34]["weather"][0]["description"];
          //    let temperatureDes = data[list][10] ["weather"][0]["description"]

          let tempValue1 = data["list"][2]["main"]["temp"];
          let tempValue2 = data["list"][10]["main"]["temp"];
          let tempValue3 = data["list"][18]["main"]["temp"];
          let tempValue4 = data["list"][26]["main"]["temp"];
          let tempValue5 = data["list"][34]["main"]["temp"];

          let day1 = data["list"][2]["clouds"]["dt_txt"];
          let day2 = data["list"][10]["clouds"]["dt_txt"];
          let day3 = data["list"][18]["clouds"]["dt_txt"];
          let day4 = data["list"][26]["clouds"]["dt_txt"];
          let day5 = data["list"][34]["clouds"]["dt_txt"];

          temperatureDes1.innerHTML = descValue1;
          temperatureDes2.innerHTML = descValue2;
          temperatureDes3.innerHTML = descValue3;
          temperatureDes4.innerHTML = descValue4;
          temperatureDes5.innerHTML = descValue5;

          degrees1.innerHTML = tempValue1;
          degrees2.innerHTML = tempValue2;
          degrees3.innerHTML = tempValue3;
          degrees4.innerHTML = tempValue4;
          degrees5.innerHTML = tempValue5;
          name.innerHTML = cityName;
          date1.innerHTML = day1;
          date2.innerHTML = day2;
          date3.innerHTML = day3;
          date4.innerHTML = day4;
          date5.innerHTML = day5;
          console.log(data);

          console.log(data["list"][2]["clouds"]["dt_txt".value]);
        });
    })
    // })

    .catch((err) => alert("weather not found"));
});
