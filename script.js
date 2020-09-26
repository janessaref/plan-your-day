/*
Guide for day planner construction:
1. add moment js static day
2. local storage
3. event listener to save button
4. grab colors to match the time of day
*/ 

var textBox = $("textarea");

let getToDo = localStorage.getItem("saveToDo");
if (getToDo !== null) {
    getToDo = getToDo.split(",");
    for(let l = 0; l < textBox.length; l++) {
        textBox[l].value = getToDo[l];
    }
}


// Today's date from moment.js displayed on jumbotron
moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(moment().format('dddd, MMMM Do'));  

// Array for local storage values
let saveToDo = [];

$(".saveBtn").on("click",function() {
    console.log("hello");
   
    // var save = $(this).closest("textarea").attr("data-time");
    // var saveData = $(save).val();
    // console.log(saveData)

    let saveText = $("textarea");
    console.log(saveText[0].value);
    saveToDo = [];
    for(var k = 0; k < saveText.length; k++) {
        saveToDo.push(saveText[k].value);
    }
    console.log(saveToDo)

    // if (textAreaSave !== null) {
         // saveToDo.push(textAreaSave);
        
    // }

    localStorage.setItem("saveToDo", saveToDo);

});

// colors of time of day
var timeofDay = moment().format('MMMM Do YYYY, h:mm:ss a');

var hourofDay = +moment().format('H');  


for(var i = 0; i < textBox.length; i++) {
    var everyHr = +($("textarea").eq(i)).attr("value");

    if (hourofDay == everyHr) {
        $("textarea").eq(i).addClass("present");
    }
    else if (everyHr > hourofDay) {
        $("textarea").eq(i).addClass("future");
    }
    else {
        $("textarea").eq(i).addClass("past");
    }
}


