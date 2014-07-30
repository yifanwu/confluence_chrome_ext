$(document).ready(function() {
  var d1 = new Date(Date.parse($(".last-modified").text()));
  var d1Y = d1.getFullYear();
  var d2 = new Date(Date.now());
  var d2Y = d2.getFullYear();
  var d1M = d1.getMonth();
  var d2M = d2.getMonth();

  var diff_mon = (d2M+12*d2Y)-(d1M+12*d1Y);

  if (diff_mon > 12) {
    $(".last-modified").css( "color", "red");
    $(".last-modified").css( "background-color", "yellow");
  } else if (diff_mon > 6) {      
    $(".last-modified").css( "color", "red");
  } else {      
    $(".last-modified").css( "color", "green");
  } 
});
