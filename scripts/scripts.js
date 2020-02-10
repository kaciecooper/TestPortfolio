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
  ///////////////////////////////SECTION 1
  // init controller
  var controller = new ScrollMagic.Controller();
  // build scene
  new ScrollMagic.Scene({
      triggerElement: "#trigger-good",
      triggerHook: 1, // show, when scrolled 10% into view
      duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    }).setClassToggle("#reveal-good", "visible") // add class to reveal
    .addTo(controller);
  /////////////////////////////////////////////SECTION 3////////////////////////////////
  // init controller
  var controller = new ScrollMagic.Controller();
  // build tween
  var tween = TweenMax.to("#animate", 0.5, {
    scale: 1.3,
    repeat: 5,
    yoyo: true
  });
  // build scene and set duration to window height
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: "100%"
  }).setTween(tween).addTo(controller);
  /////////////////////////////////////////////////////////////////////////////
  wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
  })
  wow.init()
  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
});