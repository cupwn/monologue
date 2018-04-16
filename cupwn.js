document.getElementById('menu-icon').addEventListener('click', function() {document.getElementsByClassName('sf-menu-phone')[0].style.display = 'none';});

var prodWraps = document.getElementsByClassName('grid_wrap');
prodWraps[0].childNodes[1].href = ''; // photo link
prodWraps[0].childNodes[3].childNodes[1].childNodes[0].href = ''; // product name link





// Links on PC left side menu
var PCmenuLinks = document.getElementsByClassName('block-side-nav')[0].getElementsByTagName('a');
for(var i = 0; i < PCmenuLinks.length; i++ ){
	PCmenuLinks[i].href = '';
}


// All links cause reload
var allLinks = document.getElementsByTagName('a');
for(var i = 0; i < allLinks.length; i++ ){
	allLinks[i].href = '';
}


// All links are disabled
var allLinks = document.getElementsByTagName('a');
for(var i = 0; i < allLinks.length; i++ ){
	allLinks[i].removeAttribute('href');
}


// Disable all add to cart buttons
var allCartButtons = document.getElementsByClassName('btn-cart');
for(var i = 0; i < allCartButtons.length; i++ ){
	allCartButtons[i].removeAttribute('onclick');
}

