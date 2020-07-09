"use strict";
function clock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let meridian = (hours < 12) ? "AM" : "PM";

  hours = (hours > 12) ? (hours - 12) : hours;
  hours = (hours < 10) ? ("0" + hours) : hours;
  minutes = (minutes < 10) ? ("0" + minutes) : minutes;
  seconds = (seconds < 10) ? ("0" + seconds) : seconds;

  //display clock
  document.querySelector('#hour').innerText = hours;
  document.querySelector('#minute').innerText = minutes;
  document.querySelector('#seconds').innerText = seconds;
  document.querySelector('#meridian').innerText = meridian;

  //display date
  const options = { weekday: 'long', month: 'long', day: 'numeric' }
  document.querySelector('#today').innerText = date.toLocaleDateString("en-US", options);

  //update time
  let update = setTimeout(clock, 500);
}
clock();






let openFormBtn = document.querySelector('#setPreference');
let saveFormBtn = document.querySelector('#submit');
let form = document.querySelector('#form');

let breakfastMeal;
let lunchMeal;
let dinnerMeal;
let breakfastTime;
let lunchTime;
let dinnerTime;


let breakfastMealvalue = document.querySelector('input[name= breakfast-meal]').value;
let lunchMealvalue = document.querySelector('input[name=lunch-meal]').value;
let dinnerMealvalue = document.querySelector('input[name= dinner-meal]').value;
let breakfastTimevalue = document.querySelector('input[name=breakfast-time]').value;
let lunchTimevalue = document.querySelector('input[name=lunch-time]').value;
let dinnerTimevalue = document.querySelector('input[name=dinner-time]').value;




openFormBtn.onclick = () => {
  form.style.display = 'flex';
  document.getElementById('submit').style.display = 'block';
  openFormBtn.style.display = 'none';
  document.getElementById('doYou').style.display = 'none';
};

saveFormBtn.onclick = () => {
  form.style.display = 'none';
  openFormBtn.style.display = 'block';
  document.getElementById('doYou').style.display = 'block';
  document.getElementById('submit').style.display = 'none';
  breakfastMeal = breakfastMealvalue;
};

const hour = document.querySelector('#hour').value;
const mealTime =document.querySelector('#hour').value;

if (hour==breakfastTimevalue ){
  mealTime = breakfastTimevalue;
}else if(hour==lunchTimevalue){
  mealTime = lunchTimevalue;
}else if (hour==dinnerTimevalue){
  mealTime = dinnerTimevalue;
};






// let saveupdate = document.querySelector('input[type=submit])
// let form = document.querySelector('#setPreference');
  // setPreference.addEventListener(onclick, console.log('button was clicked'));