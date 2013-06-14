
Ti.App.addEventListener('details' , function( e ){
	Ti.API.info("==============================================================Event listning");

	Ti.API.info("==============================================================" + e.name);
Ti.API.info("==============================================================" + e.id);
Ti.API.info("==============================================================" + e.status);
Ti.API.info("==============================================================" + e.time);
Ti.API.info("==============================================================" + e.event_url);
Ti.API.info("==============================================================" + e.description);
Ti.API.info("==============================================================" + e.group_id);
Ti.API.info("==============================================================" + e.group_lat);
Ti.API.info("==============================================================" + e.group_lon);
Ti.API.info("==============================================================" + e.group_name);
Ti.API.info("==============================================================" + e.urlname);

	$.event_name.setText(e.name);
	$.time.setText(e.time);
	$.id.setText(e.id);
	$.status.setText(e.status);
	$.event_url.setText(e.event_url);
	$.description.setText(e.description);
	$.group_id.setText(e.group_id);
	$.group_lat.setText(e.group_lat);
	$.group_lon.setText(e.group_lon);
	$.group_name.setText(e.group_name);
	$.urlname.setText(e.urlname);
});


/*
 var arg1 = args[0] || {};
    var data = [];  
    data    = arg1;
    Titanium.API.info('==============================data Value::'+data);*/

