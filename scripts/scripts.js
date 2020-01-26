// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!


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
	.addIndicators({
		name:'fade scene',
		colorTrigger:'black',
	})
	.addTo(controller)
});

var controller = new ScrollMagic.Controller();

$(function () { // wait for document ready
		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 850})
						.setPin("#pin1")
						.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
						.addTo(controller);
	});
				

// End of Your Code . Don't delete that line below!!
});