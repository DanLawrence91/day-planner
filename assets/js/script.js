var date = moment().format("dddd, MMMM Do");
var btnSave = $(".saveBtn")
var workEventEl = $(".work-event");
var time = moment().format("HH");

// when user lands on page
// user sees current date in header and business hours for that day in rows of one hour each - 9am - 5pm
// date is that day and changes each day
$('#currentDay').text(date);

// each hour is color coded depending on whether in past, present or future. color will change automatically depending on current time
// as time moves throughout day change background color of textarea depending on that time

var colorTime = function colorChange() {

    // check time working properly and right div is selected
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
            //$(timeChangeColor).prop("disabled", true);
        } else if (workEventTime > time) {
            $(timeChangeColor).addClass("future");
        } else {
            $(timeChangeColor).addClass("present");
        }
    }
}

//checks every 10 minutes for time to see if color should change
setInterval(colorTime(), (1000 * 60) * 10)

// each row has a save button which will save content inside to local storage when clicked


// btnSave.on('click', function (event) {
//     event.preventDefault();

//     var data = workEventEl.val();
//     localStorage.setItem("data", data);

// })

btnSave.on('click', saveData)

function saveData(event) {

    event.preventDefault();

    for (var i = 0; i < workEventEl.length; i++){

        var workData = workEventEl[i].id;

        // get the element by the ID associated in HTML
        var savedData = document.getElementById(workData)

        var timeslot = i + 9; 
        data = savedData.value;
        localStorage.setItem("data" + timeslot, data);
    }

    console.log(data)
}

// data will be displayed next time page is shown


// need local storage to clear end of each day
function clearData (){
    if (time > 18){
        localStorage.clear();
    }
}
clearData();

// function saveData(event) {

//     event.preventDefault();

//     console.log(event.target) //which save button was clicked?
//     console.log(event.target.id) //what's the id of the clicked save button?
//of course you don't have id attributes on your save buttons as of now, but this is a possibility worth exploring.

