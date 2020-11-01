$(document).ready(function () {

// let workDay = {
//     "8 AM": "",
//     "9 AM": "",
//     "10 AM": "",
//     "11 AM": "",
//     "12 PM": "",
//     "1 PM": "",
//     "2 PM": "",
//     "3 PM": "",
//     "4 PM" : "",
//     "5 PM": "",
// };

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

$("button").click(function() {
    console.log(this);
    let text = $(this).siblings("textarea").val();
    let hourString = $(this).parent().attr("id");
    
    localStorage.setItem(hourString, text);
  });

  // function to check current time and apply proper styling to the rows 
  function trackTime() {
      
      let currentHour = moment().hour();

      


      $(".calendar-row").each(function () {
          let timeSlot = parseInt($(".entry").attr("data-time"));
          console.log(timeSlot);

          if (timeSlot < currentHour) {
            $(".entry").addClass("past");
            $(".entry").removeClass("future");
            $(".entry").removeClass("present");
          } else if (timeSlot === currentHour) {
            $(".entry").removeClass("past");
            $(".entry").addClass("present");
            $(".entry").removeClass("future");
          } else {
            $(".entry").removeClass("present");
            $(".entry").removeClass("past");
            $(".entry").addClass("future");
          }
          



      });

    
  };

  trackTime();



})
