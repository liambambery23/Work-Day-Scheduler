let workDay = {
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM" : "",
    "5 PM": "",
};

//sets current date and time to top of page
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

function renderSchedule() {
    $(".entry").JSON.parse(localStorage.getItem("workDay"));
}