$(document).ready(function() {

  var g = $(".greeting"),
      time = new Date(),
      h = time.getHours();
  if (h>18){
    g.text("\tGood evening,")
  }
  else if(h>12){
    g.html("    Good afternoon,");
  }
  else {
    g.html("    Good morning!")
  }
})
