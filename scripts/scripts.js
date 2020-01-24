// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  

$(document).ready(function(){
  // Change this to the correct selector.
  $('nav.fixed').fixed();
});


$(window).scroll(function() {
                var top = $(this).scrollTop();
                if (top > 26) {
                   $(".perspective").css("color", "black");

                } 
               else {
                   $(".perspective").css("color", "red");

                }

 })



//-----------------------




// End of Your Code . Don't delete that line below!!
});