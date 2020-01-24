// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  

$(document).ready(function(){
  // Change this to the correct selector.
  $('nav.fixed').fixed();
});


$(document).ready(function(){
	$(window).scroll(function(){
  	var light_pos = $('#white_div').offset().top;
    var light_height = $('#white_div').height();
    var menu_pos = $('.NavigationButton').offset().top;
    var menu_height = $('.NavigationButton').height();
    var scroll = $(window).scrollTop();
    console.log('light',light_pos);
    console.log('menu',menu_pos);
    console.log('scroll',scroll);
    
    if(menu_pos > light_pos && menu_pos < (light_pos + light_height)) {
    	$('.NavigationButton').addClass('menu_black');
      $('.NavigationButton').removeClass('menu_white');
    }
    else {
    	$('.NavigationButton').removeClass('menu_black');
      $('.NavigationButton').addClass('menu_white');
    }


//-----------------------




// End of Your Code . Don't delete that line below!!
});