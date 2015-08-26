$(function(){
/*//book version
//add title to aside
$("aside").append("<h2>Table of Contents</h2>");
//add <a> tags to all h2 elements
$("article h2").wrapInner("<a></a>");
//add ids to <a> tags
$("article a").each(function(index)
{
	var id = "heading" + (index+1);
	$(this).attr("id", id);
});//end each
$("article a").clone().insertAfter($("aside h2"));
$("aside a").removeAttr("id");
$("aside a").attr("href", function(index){
	var href = "heading" + (index + 1);
	return href;
});//end attr func
$("h1").wrapInner("<a id ='top'>Back to top</a>");
//add back-to-top links before each h2 heading
$("article h2").before("<a href = '#top'>Back to Top</a>");
$("article a:first").remove();
$("article p:last").after("<a href = '#top'>Back to Top</a>");*/
//my original version

var h2Headings = $("article h2");
$("h1").wrapInner("<a id = 'top'></a>")
h2Headings.each(function(index)
	{
		var h2Href = "heading" + (index + 1);
		$(this).wrapInner("<a></a>");
		$(this).children("a").attr("id", h2Href);
		$("aside").append("<a href ='#" + h2Href + "'>" + $(this).text() + "</a>");
	});//end each
$("article h2~h2").before("<a href = '#top'>Back to Top</a>");
$("article h2:last+p:last").after("<a href = '#top'>Back to Top</a>");
}); //end ready function