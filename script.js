
$(document).ready(function(){
    $(".saveBtn").on("click", function() {
      var value = $(this).siblings(".entry").val();
      var time = $(this).parent().attr("id");
  
      // save in localStorage
    localStorage.setItem(time, value);
    });
  
    function hourUpdater() {
      // get current number of hours
      var currentHour = moment().hours();
  
   // Loop over time blocks
   $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
      // Color coding dependent upon hour 
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
  
  // Set up interval to check if current time needs to be updated
  var interval = setInterval(hourUpdater, 15000);
  
  // Load any saved data from localStorage
  $("#hour-8 .entry").val(localStorage.getItem("hour-8"));
  $("#hour-9 .entry").val(localStorage.getItem("hour-9"));
  $("#hour-10 .entry").val(localStorage.getItem("hour-10"));
  $("#hour-11 .entry").val(localStorage.getItem("hour-11"));
  $("#hour-12 .entry").val(localStorage.getItem("hour-12"));
  $("#hour-13 .entry").val(localStorage.getItem("hour-13"));
  $("#hour-14 .entry").val(localStorage.getItem("hour-14"));
  $("#hour-15 .entry").val(localStorage.getItem("hour-15"));
  $("#hour-16 .entry").val(localStorage.getItem("hour-16"));
  $("#hour-17 .entry").val(localStorage.getItem("hour-17"));
  
  // Display current day on page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });