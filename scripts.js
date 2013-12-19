/*$.getScript("quo.js", function(){
	console.log("hui");
});
*/
$(document).ready(function(){

	
});

/*$$(document).tap(function(){
	$$('p').html("tadaa");
});
*/
$(function(){
  // Bind the swipeHandler callback function to the swipe event on div.box
  $( "div.nimi" ).on( "swipe", swipeHandler );
 
  // Callback function references the event target and adds the 'swipe' class to it
  function swipeHandler( event ){
    $( event.target ).toggleClass( "modi" );
  }
});