(function(){
var $ = function(id){
	return document.getElementById(id);
}

window.onload = function()
{
	var imageList = $("image_list").getElementsByTagName("a");
	var imageNode = $("image");
	var output = $("output");
	var imageCache = [];

	//preprocess images
	var i, image, link, timer;
	for(i = 0; i < imageList.length; i++)
	{
		link = imageList[i];
		image = new Image();
		image.src = link.href;
		image.title = link.title;
		imageCache.push(image);
	}
	//slideshow timer
	var imageCounter = 0;
	var timer = setInterval(
		function()
		{
			imageCounter = (imageCounter + 1)%imageCache.length;
			image = imageCache[imageCounter];
			imageNode.src = image.src;
			output.firstChild.nodeValue = image.title;
		}, 2000 );
}

})();