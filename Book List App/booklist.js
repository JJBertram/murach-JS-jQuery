(function(){

var $ = function(id){ //helper function
	return document.getElementById(id);
}

window.onload = function()
{
	var images = $("cata").getElementsByTagName("a");
	var h2Nodes = $("cata").getElementsByTagName("h2");
	var bookImage = $("image");
	$("first_h2").focus();
	//preprocess images
	var i, image, link;
	for(i = 0; i < images.length; i++)
	{
		link = images[i];
		image = new Image();
		image.src = link.href;
		link.onclick = function(e)
		{
			if(!e)
			{
				e = link.event;
			}
			if(e.preventDefault)
			{
				e.preventDefault();
			}
			else
			{
				e.returnValue = false;
			}
			book = this;
			bookImage.setAttribute("src", book.href);
		}

	}
	var h2Node;
	for(var j = 0; j < h2Nodes.length; j++)
		{
			h2Node = h2Nodes[j];
			h2Node.onclick = function()
			{
				var h2 = this;
				h2.focus();
				bookImage.setAttribute("src", "")
				if(h2.hasAttribute("class"))
				{
					h2.removeAttribute("class");
				}
				else
				{
					h2.setAttribute("class", "closed");
				}
				if(h2.nextElementSibling.hasAttribute("class"))
				{
					h2.nextElementSibling.removeAttribute("class");
				}
				else
				{
					h2.nextElementSibling.setAttribute("class", "show");
				}
			}//end h2 onclick
		}//end for loop
}//end window.onload

})();