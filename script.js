/*
Guide for day planner construction:
1. add moment js static day
2. local storage
3. event listener to save button
4. get colors to match the time of day
*/ 

// Today's date from moment.js
// var saveToDo = [];
moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(moment().format('dddd, MMMM Do'));  

// $(".saveBtn").on("click",function() {
//     console.log("hello");
   
//      var save = $(this).attr("data-time");
//     var saveData = $(save).val();

//     saveToDo.push(saveData);

//     localStorage.setItem(save, saveToDo);

// });

// colors of time of day
var timeofDay = moment().format('MMMM Do YYYY, h:mm:ss a');

var hourofDay = moment().format('H');  





