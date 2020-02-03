// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!



////////////////////////////////////////////////////////////////Perspective Script

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 50) {
    $('.rightside').hide();
  } else {
    $('.rightside').show();
  }
});


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 50) {
    $('.upsidedown').show();
  } else {
    $('.upsidedown').hide();
  }
});



///////////////////////////////////////////////////////////////Sticky Quote

///////////////////////////////////////////////////////////////


///////////////////////////////////////////////PAGE 3////////////////////






///////////////////////////////SECTION 1



  // init controller
  var controller = new ScrollMagic.Controller();
  // build scene
    new ScrollMagic.Scene({
              triggerElement: "#trigger-good",
              triggerHook: 1, // show, when scrolled 10% into view
              duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
              offset: 50 // move trigger to center of element
            })
            .setClassToggle("#reveal-good", "visible") // add class to reveal
            .addIndicators({

            name:"scroll",
            colorStart:"pink",


            }) // add indicators (requires plugin)
            .addTo(controller);


/////////////////////////////////////////////////////////////////////////////



});


