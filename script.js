
$(document).ready(function(){
  $("save").on("click", function() {
    var value = $(this).siblings(".entry").val();
    var time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time, value);
  });

  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();

 // loop over time blocks
 $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // check if we've moved past this time
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } 
    else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } 
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

hourUpdater();

// set up interval to check if current time needs to be updated
var interval = setInterval(hourUpdater, 15000);

// load any saved data from localStorage
$("#hour-8 .entry").val(localStorage.getItem("hour-8"));
$("#hour-9 .entry").val(localStorage.getItem("hour-9"));
$("#hour-10 .entry").val(localStorage.getItem("hour-10"));
$("#hour-11 .entry").val(localStorage.getItem("hour-11"));
$("#hour-12 .entry").val(localStorage.getItem("hour-12"));
$("#hour-1 .entry").val(localStorage.getItem("hour-1"));
$("#hour-2 .entry").val(localStorage.getItem("hour-2"));
$("#hour-3 .entry").val(localStorage.getItem("hour-3"));
$("#hour-4 .entry").val(localStorage.getItem("hour-4"));
$("#hour-5 .entry").val(localStorage.getItem("hour-5"));

// display current day on page
$("#currentDay").text(moment().format("dddd, MMMM Do"));
});
    
  