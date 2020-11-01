$(document).ready(function () {


//set current date and time to top of page
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

//check local storage for saved entries
$("#row1 .entry").val(localStorage.getItem("row1"));
$("#row2 .entry").val(localStorage.getItem("row2"));
$("#row3 .entry").val(localStorage.getItem("row3"));
$("#row4 .entry").val(localStorage.getItem("row4"));
$("#row5 .entry").val(localStorage.getItem("row5"));
$("#row6 .entry").val(localStorage.getItem("row6"));
$("#row7 .entry").val(localStorage.getItem("row7"));
$("#row8 .entry").val(localStorage.getItem("row8"));
$("#row9 .entry").val(localStorage.getItem("row9"));
$("#row10 .entry").val(localStorage.getItem("row10"));

//when save button is clicked, set content of text area to local storage

$(".saveBtn").click(function() {
    console.log(this);
    let text = $(this).siblings("textarea").val();
    let hourString = $(this).parent().attr("id");
    
    localStorage.setItem(hourString, text);
  });

  // clears previous saved data from local storage and reloads the page
$("#clear").click(function () {
    localStorage.clear();
    location.reload();
});

  // function to check current time and apply proper styling to the rows 
  function trackTime() {
      
      let currentHour = moment().hour();
      
      $(".entry").each(function () {
          let timeSlot = parseInt($(this).attr("data-time"));
          console.log(this);
          console.log(timeSlot, currentHour);

          if (timeSlot < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
          } else if (timeSlot === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
          } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
          }
          



      });

    
  };

  trackTime();



})
