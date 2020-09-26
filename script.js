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

// textarea variable
var textBox = $("textarea");

// grab values in local storage
let getToDo = JSON.parse(localStorage.getItem("saveToDo"));
if (getToDo !== null) {
    for (let l = 0; l < textBox.length; l++) {
        textBox[l].value = getToDo[l];
    };
};

// empty array for local storage values
let saveToDo = [];

// save button function for all
$(".saveBtn").on("click", function () {

    let saveText = $("textarea");
    
    // allows the field/textarea to be empty
    saveToDo = [];

    // pushes values into the array saveToDo
    for (var k = 0; k < saveText.length; k++) {
        saveToDo.push(saveText[k].value);
    };

    // setting the events into local storage
    localStorage.setItem("saveToDo", JSON.stringify(saveToDo));
});

// today's date from moment.js displayed on jumbotron
moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(moment().format('dddd, MMMM Do'));

// military time for the color blocks and converted into a number
var hourofDay = +moment().format('H');

// loop through the time of day to change colors of textarea
for (var i = 0; i < textBox.length; i++) {

    // storing data-value attribute into variable and converting to a number
    var everyHr = +($("textarea").eq(i)).attr("data-value");

    // for past hour: gray text box; present hour: green text box; future hour: pink text box
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


