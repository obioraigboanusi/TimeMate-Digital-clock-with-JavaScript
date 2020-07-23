"use strict";

let details = {
  breakfast: { food_Name: "", food_Time: "" },
  lunch: { food_Name: "", food_Time: "" },
  dinner: { food_Name: "", food_Time: "" }
};
let dataItem = localStorage.getItem('details');
const detailsKey = localStorage.key('details');
let data = JSON.parse(dataItem);

const foodName = document.getElementById('meal-name');
const foodTime = document.getElementById('meal-time');
const foodType = document.getElementById('meal-type');
const button = document.querySelector('#add-item');
const tableBody = document.querySelector('tbody');

window.addEventListener('load', () => {
  if (dataItem) {
    loadDetails();
  } else {
    localStorage.setItem('details', JSON.stringify(details))
  };
});

button.addEventListener('click', function () {
  let fTime = foodTime.value;
  let fName = foodName.value;
  let fType = foodType.value;
  if (fTime && fName) {
    if (fType == 'breakfast') {
      data.breakfast.food_Name = fName;
      data.breakfast.food_Time = fTime;
      localStorage.setItem("details", JSON.stringify(data));
      updateContent();
    } else if (fType == 'lunch') {
      data.lunch.food_Name = fName;
      data.lunch.food_Time = fTime;
      localStorage.setItem("details", JSON.stringify(data));
      updateContent();
    } else {
      data.dinner.food_Name = fName;
      data.dinner.food_Time = fTime;
      localStorage.setItem("details", JSON.stringify(data));
      updateContent();
    };
    foodTime.value = "";
    foodName.value = "";
  };
})
// functions declaration
function loadDetails() {
  if (data.breakfast.food_Name != "") {
    addRow('breakfast', data.breakfast.food_Name, data.breakfast.food_Time);
  };
  if (data.lunch.food_Name != "") {
    addRow('lunch', data.lunch.food_Name, data.lunch.food_Time);
  };
  if (data.dinner.food_Name != "") {
    addRow('dinner', data.dinner.food_Name, data.dinner.food_Time);
  }
};

const clearBtn = document.getElementById('clear-all');
const doneBtn = document.getElementById('done');
const form = document.querySelector('#form');
const openBtn = document.getElementById('open-form');

clearBtn.addEventListener('click', () => {
  localStorage.clear();
  tableBody.innerHTML = '';
});

doneBtn.addEventListener('click', () => {
  form.style.display = 'none';
  openBtn.style.display = 'block';
  document.getElementById('doYou').style.display = 'block';
  document.getElementById('done').style.display = 'none';
})
openBtn.onclick = () => {
  form.style.display = 'flex';
  document.getElementById('done').style.display = 'block';
  openBtn.style.display = 'none';
  document.getElementById('doYou').style.display = 'none';
};

function addRow(fType, fName, fTime) {
  const row = `<tr><td class="foodtype"> ${fType} </td><td>${fName}</td><td>${fTime}</td></tr>`;

  tableBody.insertAdjacentHTML('beforeend', row);
};
function updateContent() {
  tableBody.innerHTML = '';
  loadDetails();
}

function clock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let meridian = (hours < 12) ? "AM" : "PM";
  hours = hourCalc(hours);
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

  if (hours === hourCalc(data.breakfast.food_Time)) {
    mealDisplay.innerText = "Breakfast";
    foodDisplay.innerText = data.breakfast.food_Name;
    photoDisplay.style.backgroundImage = "url('./images/pic01.jpg')";
  } else if (hours === hourCalc(data.lunch.food_Time)) {
    mealDisplay.innerText = "Lunch";
    foodDisplay.innerText = data.lunch.food_Name;
    photoDisplay.style.backgroundImage = "url('./images/pic02.jpg')";
  } else if (hours === hourCalc(data.dinner.food_Time)) {
    mealDisplay.innerText = "Dinner";
    foodDisplay.innerText = data.dinner.food_Name;
    photoDisplay.style.backgroundImage = "url('./images/pic03.jpg')";
  } else {
    mealDisplay.innerText = "Coding";
    foodDisplay.innerText = "coding";
    photoDisplay.style.backgroundImage = "url('./images/pic02.jpg')";
  };

  function hourCalc(el) {

    el = (el == 0) ? (el = 12) : el;
    el = (el > 12) ? (el - 12) : el;
    el = (el < 10) ? ("0" + el) : el;
    return  el.toString();
  }
 
  //update time
  let update = setTimeout(clock, 500);
}
clock();