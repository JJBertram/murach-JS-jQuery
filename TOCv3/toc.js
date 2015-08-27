$(function(){
/*//book version
$("aside").append("<h2>Table of contents</h2>");

	// wrap h2 text in <a> tags
	$("article h2").wrapInner("<a></a>");
	
	// add ids to the <a> tags
	$("article a").each (function(index) {
		var id = "heading" + (index + 1);
		$(this).attr("id", id);
	});
		
	// clone article <a> tags and insert them into the aside
	$("article a").clone().insertAfter($("aside h2"));
	// remove the id attributes from the <a> tags
	$("aside a").removeAttr("id");
	
	// add the href attributes to the <a> tags
	$("aside a").attr("href", function(index) {
	    var href = "#heading" + (index + 1);
		return href;
    });
	
	// change the CSS for the selected topic and move the TOC
	$("aside a").click (function() {
		// derive the id of the selected h2 element from the <a> tag
		id = $(this).attr("href");
		
		// change the styles for the selected heading
		$(id).css({ "color": "blue", "font-size": "150%" });
				
		var h2Offset = $(id).offset().top;
		var asideHeight = $("aside").height();
		var articleHeight = $("article").height();
		if ((h2Offset + asideHeight) <= articleHeight) {
			asideOffset = h2Offset;
		}
		else { 
			asideOffset = articleHeight - asideHeight;
		}
		$("aside").css("top", asideOffset);
	});
*/
//my original version

var h2Headings = $("article h2");
$("aside").append("<h2>Table of Contents</h2>");
$("aside").append("<br>");
$("h1").wrapInner("<a id = 'top'></a>")
$("article h2").next("p").css("text-indent", "0em");
h2Headings.each(function(index)
	{
		var h2Href = "heading" + (index + 1);
		var self = $(this);
		$(this).wrapInner("<a></a>");
		var anchor = $(this).children("a");
		anchor.attr("id", h2Href);
		var anchorCopy = anchor.clone();
		anchorCopy.insertBefore($("aside br"));
		anchorCopy.removeAttr("id").attr("href", "#" + h2Href);
		anchorCopy.click(function(){
			self.css({ "color": "blue", "font-size": "150%"});
			$("article h2").not(self).css({"color":"black", "font-size":"120%"});
			var h2Top = self.offset().top;
			var asideHeight = $("aside").height();
			var articleHeight = $("article").height();
			if((h2Top + asideHeight) <= articleHeight ){
				asideOffset = h2Top;	
			} 
			else {
				asideOffset = articleHeight - asideHeight;
			}
			$("aside").css("top", asideOffset);

		});//end aside a click fun
	});//end each
//$("article h2~h2").before("<a href = '#top'>Back to Top</a>");
//$("article h2:last+p:last").after("<a href = '#top'>Back to Top</a>");
$("aside br").after("<a href = '#top'>Back to Top</a>");
$("aside br+a").click(function(){
	$("aside").css("top", 57.5);
//console.log($("aside").offset());
});
}); //end ready function