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


///////////////////////////////////////////////////////////////Page 1 Quote
	
























///////////////////////////////////////////////////////////////Page 3 Panels


// define images
	var images = [
		"images/badday-img1.png",
		"images/badday-img2.png",
		"images/badday-img3.png",
		"images/badday-img4.png",
		"images/badday-img5.png",
		"images/badday-img6.png",
		"images/badday-img7.png",
		"images/badday-img8.png",
		"images/badday-img9.png",
		"images/badday-img10.png",
		"images/badday-img11.png",
		"images/badday-img12.png",
		"images/badday-img13.png",
		"images/badday-img14.png",
		"images/badday-img15.png"
	];

	// TweenMax can tween any property of any object. We use this object to cycle through the array
	var obj = {curImg: 0};

	// create tween
	var tween = TweenMax.to(obj, 0.5,
		{
			curImg: images.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 3,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#myimg").attr("src", images[obj.curImg]); // set the image source
			}
		}
	);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300})
					.setTween(tween)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	// handle form change
	$("form.move input[name=duration]:radio").change(function () {
		scene.duration($(this).val());
	});



});