const date = moment();

// when user lands on page

// user sees current date in header and business hours for that day in rows of one hour each - 9am - 5pm

// timeblocks in form of table - 3 columns and 9 rows

// each row and hour of the day

// col 1 = that time e.g 9am
// col 2 = editable area (main width of row)
// col 3 = save button

// date is that day and changes each day
$('#currentDay').text(date.format("dddd, MMMM Do"))

// events can be added to each row

// when click on row can edit content inside with text to add event

// each row has a save button which will save content inside to local storage when clicked

// data will be displayed next time page is shown 

// each hour is color coded depending on whether in past, present or future. color will change automatically depending on current time
