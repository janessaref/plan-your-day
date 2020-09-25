/*
Guide for day planner construction:
1. add moment js static day
2. local storage
3. event listener to save button
4. get colors to match the time of day
*/ 

// Today's date from moment.js

var dayDate = document.getElementById("currentDay");
dayDate.append(moment().format('dddd, MMMM Do'));  

var saveBtn = document.querySelectorAll(".save");

// Event Listener for save button






