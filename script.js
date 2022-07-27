// fetch('https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}')
// .then(function(res){
//     console.log(res)
//     return res.json()
// }).then(function(data){
//     console.log(data)
//     // document.querySelector('.todo').innerText = data[1].id
//     // $('.todo').text(data[1].title)
//     // for(i = 0; i< data.length -150;i++){
//     //     console.log (data[i].id)
//     // }
// })
// const select = document.getElementById('breeds');
// const card = document.querySelector('.card');
// const form = document.querySelector('form');

// // ------------------------------------------
// //  FETCH FUNCTIONS
// // ------------------------------------------
// function fetchData(url){
//   return fetch(url)
//     .then(checkStatus)
//     .then(res => res.json())
//     .catch(err => console.log('Looks like there was a problem', err)
// }

// fetchData('https://dog.ceo/api/breeds/list')
//       .then(data => generateOption(data.message))

// fetchData('https://dog.ceo/api/breeds/image/random')
//       .then(data => generateImage(data.message))
//       .

// // ------------------------------------------
// //  HELPER FUNCTIONS
// // ------------------------------------------
// function checkStatus(response){
//   if (response.ok){
//   return Promise.resolve(response);
//   }else {
//   return Promise.reject(new err(response.statusText));
//   }
// }

// function generateOption(data){
//   const options = data.map(item => `
//     <option value='${item}'>${item} </option>
//   `).join('');
//   select.innerHTML = options;
// }

// function generateImage(data){
//   const html = `
//     <img src = '${data}' alt>
//     <p> Click to view images of ${select.value}s</p>
// `;
//   card.innerHTML = html;
// }

// function fetchBreadImage(){
//   const breed = select.value;
//   const img = card.querySelector('img');
//   const p = card.querySelector('p');

//   fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
//     .then (data => {
//       img.src = data.message;
//       img.alt - breed;
//       p.textContent = `Click to view more ${breed}s`;
//   })
// }
// // ------------------------------------------
// //  EVENT LISTENERS
// // ------------------------------------------
// select.addEventListener('change', fetchBreadImage);
// card.addEventListener('click', fetchBreadImage);

// const select = document.getElementById('breeds');
// const card = document.querySelector('.card');
// const form = document.querySelector('form');

// // ------------------------------------------
// //  FETCH FUNCTIONS
// // ------------------------------------------
// function fetchData(url){
//   return fetch(url)
//     .then(status)
//     .then(res => res.json())
//     .catch(err => console.log('Looks like there was a problem', err))
// }
// //
// //Promise.all([
// //      fetchData('https://dog.ceo/api/breeds/list'),
// //      fetchData('https://dog.ceo/api/breeds/image/random')
// //])

// fetchData('https://dog.ceo/api/breeds/list')
//   .then(data => console.log(data))
// fetchData('https://dog.ceo/api/breeds/list')
//    .then(data => generateOption(data.message))

// fetchData('https://dog.ceo/api/breeds/image/random')
//       .then(data => generateImage(data.message))

// // ------------------------------------------
// //  HELPER FUNCTIONS
// // ------------------------------------------
// function status(res){
//   if (res.ok){
//   return Promise.resolve(res);
//   }else {
//   return Promise.reject(new err(res.statusText));
//   }
// }

// function generateOption(data){
//   const options = data.map(item => `
//     <option value='${item}'>${item} </option>
//   `).join('');
//   select.innerHTML = options;
// }

// function generateImage(data){
//   const html = `
//     <img src = '${data}' alt>
//     <p> Click to view images of ${select.value}s</p>
// `;
//   card.innerHTML = html;
// }

// function fetchBreadImage(){
//   const breed = select.value;
//   const img = card.querySelector('img');
//   const p = card.querySelector('p');

//   fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
//     .then (data => {
//       img.src = data.message;
//       img.alt - breed;
//       p.textContent = `Click to view more ${breed}s`;
//   })
// }
// // ------------------------------------------
// //  EVENT LISTENERS
// // ------------------------------------------
// select.addEventListener('change', fetchBreadImage);
// card.addEventListener('click', fetchBreadImage);
// form.addEventListener('submit', postData);

// // ------------------------------------------
// //  POST DATA
// // ------------------------------------------
// function postData(){
// e.preventDefault();
//   const name= document.getElementById('name').value;
//   const comment = document.getElementById('comment').value;

//   fetch('https://jsonplaceholder.typicode.com/comments',{
//     methond: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: json.stringify({name, comment})
//   })
//   .then(status)
//   .then(res => res.json())
//   .then (data => console.log(data))

// const select = document.getElementById('breeds');
// const card = document.querySelector('.card');
// const form = document.querySelector('form');

// // ------------------------------------------
// //  FETCH FUNCTIONS
// // ------------------------------------------
// function fetchData(url){
//   return fetch(url)
//     .then(status)
//     .then(res => res.json())
//     .catch(err => console.log('Looks like there was a problem', err))
// }
// //
// //Promise.all([
// //      fetchData('https://dog.ceo/api/breeds/list'),
// //      fetchData('https://dog.ceo/api/breeds/image/random')
// //])

// fetchData('https://dog.ceo/api/breeds/list')
//   .then(data => console.log(data))
// fetchData('https://dog.ceo/api/breeds/list')
//    .then(data => generateOption(data.message))

// fetchData('https://dog.ceo/api/breeds/image/random')
//       .then(data => generateImage(data.message))

// // ------------------------------------------
// //  HELPER FUNCTIONS
// // ------------------------------------------
// function status(res){
//   if (res.ok){
//   return Promise.resolve(res);
//   }else {
//   return Promise.reject(new err(res.statusText));
//   }
// }

// function generateOption(data){
//   const options = data.map(item => `
//     <option value='${item}'>${item} </option>
//   `).join('');
//   select.innerHTML = options;
// }

// function generateImage(data){
//   const html = `
//     <img src = '${data}' alt>
//     <p> Click to view images of ${select.value}s</p>
// `;
//   card.innerHTML = html;
// }

// function fetchBreadImage(){
//   const breed = select.value;
//   const img = card.querySelector('img');
//   const p = card.querySelector('p');

//   fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
//     .then (data => {
//       img.src = data.message;
//       img.alt - breed;
//       p.textContent = `Click to view more ${breed}s`;
//   })
// }
// // ------------------------------------------
// //  EVENT LISTENERS
// // ------------------------------------------
// select.addEventListener('change', fetchBreadImage);
// card.addEventListener('click', fetchBreadImage);
// form.addEventListener('submit', postData);

// // ------------------------------------------
// //  POST DATA
// // ------------------------------------------
// function postData(){
//   e.preventDefault();
//   const name = document.getElementById('name').value;
//   const comment = document.getElementById('comment').value;

//   fetch('https://jsonplaceholder.typicode.com/comments',{
//     methond: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({name, comment})
//   })
//     .then(status)
//     .then(res => res.json())
//     .then (data => console.log(data))
// function fetchData(url){

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

let search = document.querySelector("#mySearch");
let cityName = document.querySelector(".mySearch");
let searchButton = document.querySelector(".searchButton");

searchButton.addEventListener("click", function (cityName) {
  console.log(search.value);
  localStorage.setItem("searchButton", cityName.value);
});
function weather(cityName) {
  cityName = "Denver";
  var key = "37187cef71fd2277911f35c446211345";

  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&units=metric&APPID=${key}`
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
