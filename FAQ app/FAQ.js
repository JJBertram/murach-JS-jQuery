(function(){
var $ = function(id){
	return document.getElementById(id);
}

window.onload = function()
{
	var faqs = $("faqs");
	var h2Tags = faqs.getElementsByTagName("h2");
	var h2Node;
	$("first_link").focus();
	for(var i = 0; i < h2Tags.length; i++)
	{
		h2Node = h2Tags[i];
		h2Node.onclick = function()
		{
			var h2 = this;
			h2.focus();
			if(h2.hasAttribute("class"))
			{
				h2.removeAttribute("class");
			}
			else
			{
				h2.setAttribute("class", "minus");
			}
			if(h2.nextElementSibling.hasAttribute("class"))
			{
				h2.nextElementSibling.removeAttribute("class");
			}
			else
			{
				h2.nextElementSibling.setAttribute("class", "open");
			}
		}//end onclick func
		//$("first_link").focus();
	}//end for loop
}//end window.onload
})();