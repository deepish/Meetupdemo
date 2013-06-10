$.facebookview.addEventListener('myfocus', function( e ){
	alert("facebook focus()");	
});

$.facebookview.addEventListener('myblur', function( e ){
  //The view has just been blurred
  Ti.API.info('facebook blur()');
});