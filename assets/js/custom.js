// CUSTOM JS

$(document).ready
(
	function()
	{
	    $(".dp-menu-icon").click(function()
	    	{
	        	$(".menu-item").toggle();
	    	});
	    $(".dp-menu-icon").focusout(function()
	    	{
	        	$(".menu-item").hide();
	    	});
	     $(".menu-item").focusin(function()
	    	{
	        	$(".menu-item").show();
	    	});
	}
);


window.onresize = function() {
    if (window.innerWidth <= 736) {  
    	document.getElementById('menu-item').style.display  = "none";
     }
     if (window.innerWidth >= 736) {  
    	document.getElementById('menu-item').style.display  = "block";
     }
}
