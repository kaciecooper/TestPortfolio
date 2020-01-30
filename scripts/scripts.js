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



///////////////////////////////////////////////////////////////Page 1 Panels

var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: '0',
				duration: "100%" // this works just fine with duration 0 as well
				// However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
				// Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
			}
		});

		// get all slides
		var slides = document.querySelectorAll("#panel");

		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i],
					duration:0,
				})
				.setPin(slides[i], {pushFollowers: false})
				//.addIndicators({
				//	name:"panel change",
				//	colorStart:"pink",
			//}) // add indicators (requires plugin)
				.addTo(controller);
	
		}

		// get the current duration value
			var duration = scene.duration();


///////////////////////////////////////////////////////////////
	

	// init controller
	var controller = new ScrollMagic.Controller();

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
					// trigger a velocity opaticy animation
					.setVelocity("#animate", {opacity: 0}, {duration: 400})
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);




///////////////////////////////////////////////////////////////

});