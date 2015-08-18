(function(){
	var $ = function(id){
		return document.getElementById(id);
	}//end $ func

	window.onload = function()
	{
		var listNode = $("image_list"); //ul element
		var captionNode = $("caption"); //main image text, h2 element
		var imageNode = $("image"); //main img element
		var imageLinks = listNode.getElementsByTagName("a");
		var i, linkNode, image;
		//preload images
		for(i = 0; i < imageLinks.length; i++)
		{
			linkNode = imageLinks[i]
			linkNode.onclick = function(e)
			{
				var link = this;
				imageNode.src = link.getAttribute("href");
				captionNode.firstChild.nodeValue = link.getAttribute("title");
			//cancel default click event
				if(!e)
				{
					e = window.event; //for ie
				}
				if(e.preventDefault)
				{
					e.preventDefault();
				}
				else
				{
					e.returnValue = false;
				}
			}//end onclick func
			image = new Image();
			image.src = linkNode.href;
		}//end for loop
		$("first_link").focus();
	}//end window.onload function
})();//end anon wrapper func