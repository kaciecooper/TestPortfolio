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
var controller = new ScrollMagic.Controller();

$(function () { // wait for document ready
		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 850})
						.setPin("#pin1")
						
						.addTo(controller);
	});

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

	var controller = new ScrollMagic.Controller();

	var animateElem = document.getElementById("animate2");
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 400})
					.on("enter", function () {
						// trigger animation by changing inline style.
						animateElem.style.color = "#fff";
					})
					.on("leave", function () {
						// reset style
						animateElem.style.backgroundColor = "";
					})
					.addTo(controller);

///////////////////////////////////////////////////////////////Quote Script




// End of Your Code . Don't delete that line below!!
});