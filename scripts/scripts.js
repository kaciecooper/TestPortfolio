// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!

////////////////////////////////////////////////////////////Page 1/3 Script
$(document).ready(function(){

	//Init ScrollMagin

	var controller =new ScrollMagic.Controller();

	//BUILD A SCENE

	var ourScene =new ScrollMagic.Scene({
		triggerElement:'.question',
		triggerHook:0.9,
		reverse:true
	})

	.setClassToggle('.question', 'fade-in') //add class to project01
	
	.addTo(controller)
});
////////////////////////////////////////////////////////////Page 1/2 Script


////////////////////////////////////////////////////////////Page 2/2 Script

var controller = new ScrollMagic.Controller();

// build scene
		new ScrollMagic.Scene({
							triggerElement: "#trigger2",
							triggerHook: 0.9, // show, when scrolled 10% into view
							duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
							offset: 50 // move trigger to center of element
						})
						.setClassToggle("#reveal2", "visible") // add class to reveal
					
						.addTo(controller);

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

///////////////////////////////////////////////////////////////Quote Script

	// build scene
	var controller = new ScrollMagic.Controller();

	var animateElem = document.getElementById("animate2");
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 400})
					.on("leave", function () {
						// trigger animation by changing inline style.
						animateElem.style.color = "#000";
					})
					.on("enter", function () {
						// reset style
						animateElem.style.color = "#fff";
					})
					//.addIndicators({name: "3 - change inline style"}) // add indicators (requires plugin)
					.addTo(controller);

///////////////////////////////////////////////////////////////Page 2 Panels

var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave',
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
					triggerElement: slides[i]
				})
				.setPin(slides[i], {pushFollowers: false})
				.addIndicators({
					name:"panel change",
					colorStart:"pink",
			}) // add indicators (requires plugin)
				.addTo(controller);
	
		}

		// get the current duration value
			var duration = scene.duration();



// End of Your Code . Don't delete that line below!!
});