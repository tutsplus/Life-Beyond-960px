//chris coyier's little dropdown select-->

$(document).ready(function() {

	//build dropdown
	$("<select />").appendTo("nav.primary");
	
	// Create default option "Go to..."
	$("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "Go to..."
	}).appendTo("nav select");	
	
	// Populate dropdowns with the first menu items
	$("nav.primary ul li a").each(function() {
	 	var el = $(this);
	 	$("<option />", {
	     	"value"   : el.attr("href"),
	    	"text"    : el.text()
	 	}).appendTo("nav.primary select");
	});
	
	//make responsive dropdown menu actually work			
  	$("nav.primary select").change(function() {
    	window.location = $(this).find("option:selected").val();
  	});

});	