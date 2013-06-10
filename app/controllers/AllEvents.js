$.allevents.addEventListener('myfocus', function( e ){
	alert("All events focus()");	
});

$.allevents.addEventListener('myblur', function( e ){
  //The view has just been blurred
  Ti.API.info('all events blur()');
});