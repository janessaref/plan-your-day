/*
Guide for day planner construction:
1. add moment js static day on jumbotron
2. local storage: set item and then retrieve it
3. event listener to save button that lets user save events
4. grab colors to match the time of day
    - use military time to tie the value in html
    - make sure both values are numbers
    - if/else statements to add the css class into the textarea
*/

var textBox = $("textarea");
var n = 0;

let getToDo = JSON.parse(localStorage.getItem("saveToDo"));
if (getToDo !== null) {
    for (let l = 0; l < textBox.length; l++) {
        textBox[l].value = getToDo[l];
    };
};

// array for local storage values
let saveToDo = [];

$(".saveBtn").on("click", function () {

    let saveText = $("textarea");
    
    saveToDo = [];
    for (var k = 0; k < saveText.length; k++) {
        saveToDo.push(saveText[k].value);
    };

    // setting the events into local storage
    localStorage.setItem("saveToDo", JSON.stringify(saveToDo));

});


// today's date from moment.js displayed on jumbotron
moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(moment().format('dddd, MMMM Do'));

// military time for the color blocks
var hourofDay = +moment().format('H');

// loop through the time of day to change colors of textarea
for (var i = 0; i < textBox.length; i++) {
    var everyHr = +($("textarea").eq(i)).attr("data-value");

    if (hourofDay == everyHr) {
        $("textarea").eq(i).addClass("present");
    }
    else if (everyHr > hourofDay) {
        $("textarea").eq(i).addClass("future");
    }
    else {
        $("textarea").eq(i).addClass("past");
    }
};


