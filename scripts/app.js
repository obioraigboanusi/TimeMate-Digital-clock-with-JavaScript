"use strict";

let breakfastType = {
  foodName: "beans",
  foodTime: 7
};
let lunchType = {
  foodName: "beans",
  foodTime: 12
};
let dinnerType = {
  foodName: "beans",
  foodTime: 6
};

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

  // current time
  document.querySelector('#current-time').innerText = hours + ':' + minutes + meridian + ',';
  // display Current food or Tast


  const mealDisplay = document.querySelector('#meal');
  const foodDisplay = document.querySelector('#food');
  const photoDisplay = document.querySelector('#photo-container');

  switch (hours) {
    case breakfastType.foodTime:
      mealDisplay.innerText = "Breakfast";
      foodDisplay.innerText = breakfastType.foodName;
      photoDisplay.style.backgroundImage = "url('/images/pic01.jpg')";
    case lunchType.foodTime:
      mealDisplay.innerText = "Lunch";
      foodDisplay.innerText = lunchType.foodName;
      photoDisplay.style.backgroundImage = "url('/images/pic02.jpg')";
    case dinnerType.foodTime:
      mealDisplay.innerText = "Dinner";
      foodDisplay.innerText = dinnerType.foodName;
      photoDisplay.style.backgroundImage = "url('/images/pic03.jpg')";
    default:
      mealDisplay.innerText = "Coding";
      foodDisplay.innerText = "coding";
      photoDisplay.style.backgroundImage = "url('/images/pic02.jpg')";
  };


  //update time
  let update = setTimeout(clock, 500);
}
clock();

// track the form
const form = document.querySelector('#form');

// openFormBtn.onclick = () => {
//   form.style.display = 'flex';
//   document.getElementById('done').style.display = 'block';
//   openFormBtn.style.display = 'none';
//   document.getElementById('doYou').style.display = 'none';
// };

// closeFormBtn.onclick = () => {
//   form.style.display = 'none';
//   openFormBtn.style.display = 'block';
//   document.getElementById('doYou').style.display = 'block';
//   document.getElementById('done').style.display = 'none';
// };

// clearAllBtn.onclick = () => {
//   
// };

// clearAllBtn.onclick = () => {

// };