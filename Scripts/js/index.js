$( document ).ready(function() {
	console.log( "ready!" );
	var s = skrollr.init();
	var node = document.querySelector('nav');
	var menu = new Menu(node, {
    // how far from the menu (in pixels) the menu items will be
		radius: 130, 
    // how many degrees (out of 360) to use for the items, defaults to 90°
		degrees: 90, 
    // where the first menu item is placed. 0° is directly to the right, defaults to -90°
		offset: -0  
	})
});
