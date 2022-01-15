var date = moment().format("dddd, MMMM Do");
var btnSave = $(".saveBtn")
var workEventEl = $(".work-event");


// when user lands on page
// user sees current date in header and business hours for that day in rows of one hour each - 9am - 5pm
// date is that day and changes each day
$('#currentDay').text(date);

// loads stored data each time page is opened
function init() {

    for (var i = 0; i < workEventEl.length; i++) {

        var workData = workEventEl[i].id;

        // get the element by the ID associated in HTML
        var savedData = document.getElementById(workData)

        var timeslot = i + 9;
        var renderedData = localStorage.getItem("data" + timeslot);
        savedData.textContent = renderedData
    }

    clearData();
    colorChange();
}

// each hour is color coded depending on whether in past, present or future. color will change automatically depending on current time
// as time moves throughout day change background color of textarea depending on that time

function colorChange() {

    console.log(moment().format())
    // check time working properly and right div is selected
    var time = moment().format("HH");
    console.log(time);
    console.log(workEventEl);

    // loop through textarea classes
    for (var i = 0; i < workEventEl.length; i++) {

        // get a string of workEventEl id numbers
        var workEventTime = workEventEl[i].id;
        console.log(workEventTime)

        // get the element by the ID associated in HTML
        var timeChangeColor = document.getElementById(workEventTime)

        //remove previous class associated with time
        $(workEventTime).removeClass(".past .present .future");

        // add new class depending on whether id of textarea element is more, equal or less than current time generated by moment in const time
        // disable textarea if time has past
        if (workEventTime < time) {
            $(timeChangeColor).addClass("past");
            $(timeChangeColor).prop("disabled", true);
        } else if (workEventTime > time) {
            $(timeChangeColor).addClass("future");
        } else {
            $(timeChangeColor).addClass("present");
        }
    }
}

//checks every 5 minutes to refresh page to see if color and timeblock needs to change - not ideal solution
// setInterval(function(){
//     window.location.href = window.location
// }, 300000)

setInterval(colorChange, 300000)

// each row has a save button which will save content inside to local storage when clicked
btnSave.on('click', saveData)

function saveData(event) {

    event.preventDefault();
    for (var i = 0; i < workEventEl.length; i++) {

        var workData = workEventEl[i].id;

        // get the element by the ID associated in HTML
        var savedData = document.getElementById(workData)

        var timeslot = i + 9;
        data = savedData.value;
        localStorage.setItem("data" + timeslot, data);
    }
}

// data will be displayed next time page is shown

// need local storage to clear end of each day or start of next
function clearData() {
    var time = moment().format("HH");
    var timeInt = Number(time)
    if (timeInt > 17 || timeInt < 9) {
        localStorage.clear()
        workEventEl.textContent = ""
    }

    console.log(timeInt)
    console.log(typeof timeInt)
}

// calls function when page loaded
init()
clearData();