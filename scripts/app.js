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

  //display date
  const options = { weekday: 'long', month: 'long', day: 'numeric' }
  document.querySelector('#today').innerText = date.toLocaleDateString("en-US", options);

  //update time
  let update = setTimeout(clock, 500);
}
clock()






let setPreference = document.querySelector('#setPreference');
  setPreference.addEventListener(onclick, console.log('button was clicked'));