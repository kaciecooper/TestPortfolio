// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  

$(document).ready(function(){
  // Change this to the correct selector.
  $('nav.fixed').fixed();
});


$(window).scroll(function() {
                var top = $(this).scrollTop();
                if (top > 57) {
                   $(".perspective").css("color", "black");

                } 
               else {
                   $(".perspective").css("color", "white");
                 


                }

 })


var navTop = $('#perspective').offset().top;
var navStop = $('#stop').offset().top;
var lastMode = "absolute";

$(window).scroll(function() {
  var mode;
  if ($(this).scrollTop() >= navTop) {
    if ($(this).scrollTop() - navStop + $('#perspective').height() > 0)
      mode = 'absolute';
    else
      mode = 'fixed';
  } else {
    mode = 'absolute';
  }

  if (lastMode !== mode) {
    if (mode == 'fixed') {
      $('#perspective').css('position', 'fixed');
      $('#perspective').css('top', '0');
    } else {
      $('#perspective').css('position', 'absolute');
      $('#perspective').css('top', navTop);
    }
    lastMode = mode;
  }
});

//-----------------------




// End of Your Code . Don't delete that line below!!
});