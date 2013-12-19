var value;

$(document).ready(function(){

	console.log("böö");

	$("input.ts").click(function(event) {

    value = $('textarea').val();
    console.log(value);
	});
});	
