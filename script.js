$(document).ready(function() {
    $(".save-button").click(function() {
      var inputValue = $(this)
        .parent()
        .parent()
        .children("td")
        .find("input");
  
      var time = $(this)
        .parent()
        .parent()
        .children("td")[0]
        .innerHTML.split(":")[0];
      localStorage.setItem(time, inputValue.val());
    });
    console.log(localStorage.getItem("9"));
    $("input#9").val(localStorage.getItem("9"));
    console.log(localStorage.getItem("10"));
    $("input#10").val(localStorage.getItem("10"));
    console.log(localStorage.getItem("11"));
    $("input#11").val(localStorage.getItem("11"));
    console.log(localStorage.getItem("12"));
    $("input#12").val(localStorage.getItem("12"));
    console.log(localStorage.getItem("1"));
    $("input#1").val(localStorage.getItem("1"));
    console.log(localStorage.getItem("2"));
    $("input#2").val(localStorage.getItem("2"));
    console.log(localStorage.getItem("3"));
    $("input#3").val(localStorage.getItem("3"));
    console.log(localStorage.getItem("4"));
    $("input#4").val(localStorage.getItem("4"));
    console.log(localStorage.getItem("5"));
    $("input#5").val(localStorage.getItem("5"));
  });
  
  //moment.js current date and time
  var NowMoment = moment().format("LLLL");
  var eDisplayMoment = document.getElementById("displayMoment");
  eDisplayMoment.innerHTML = NowMoment;
  
  function timeslotColor() {
    var currentTime = parseInt(moment().hour());
    console.log(currentTime);
    var inputArray = $("input");
    console.log($("input"));
    inputArray.each(function() {
      var timeSlotNumber = parseInt($(this).attr("data-time"));
      if (timeSlotNumber < currentTime) {
        $(this).css("background-color", "lightgrey");
      } else if (timeSlotNumber === currentTime) {
        $(this).css("background-color", "red");
      } else if (timeSlotNumber > currentTime) {
        $(this).css("background-color", "lightgreen");
      }
    });
  }
  
  timeslotColor();