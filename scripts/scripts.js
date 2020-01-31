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
// init controller
	var controller = new ScrollMagic.Controller();

$(function () { // wait for document ready
		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "#quote-scroll", duration: 2000})
						.setPin("#pin1")
						//.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
						.addTo(controller);
	});
///////////////////////////////////////////////////////////////


  // init controller
  var controller = new ScrollMagic.Controller();

  // build tween
  var tween = TweenMax.to("#animate", 0.5, {scale: 1.3, repeat: 1000, yoyo: true});

  // build scene and set duration to window height
  var scene = new ScrollMagic.Scene({triggerElement: "#breathe", duration: "100%"})
          .setTween(tween)
          .addIndicators() // add indicators (requires plugin)
          .addTo(controller);


///////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////








});


