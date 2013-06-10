$.meetupview.addEventListener('myfocus', function( e ){

Ti.API.info('seeded: ' + Ti.App.Properties.hasProperty('seeded'));
//determine if the database needs to be seeded
//if (!Ti.App.Properties.hasProperty('seeded')) {

	// Use the HTTPClient object to send a GET request to 
	// http://bountyhunterapp.appspot.com/bounties and process the returned data.
	// It returns an array of objects in the form [{name: 'Jeff Haynie'}, ...]
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function() {
		//alert("got ");
		Ti.API.info('*****---------------------------------->got data from the network: ' + this.responseText);
		var json = JSON.parse(this.responseText);
		alert(json.results.length);
		for(var i=0,j=json.results.length;i<j;i++) {
			Ti.API.info('*****---------------------------------->got data from the network part 2: ' + json.results[i].name);
			var event = Alloy.createModel('Events', { 
					id:json.results[i].id, 
					event_name: json.results[i].name,
					status: json.results[i].status,
				   	time: json.results[i].time,
				   	event_url: json.results[i].event_url,
				    description: json.results[i].description,
				    group_id: json.results[i].group.id,
				    group_lat: json.results[i].group.group_lat,
				    group_lon: json.results[i].group.group_lon,
				    group_name: json.results[i].group.name,
				    urlname: json.results[i].group.urlname
				});
			event.save();
		}
		// set our app property so this code doesn't run next time
	    Ti.App.Properties.setString('seeded', 'yuppers');
		// force tables to update
		Alloy.Collections.Events.fetch();
	};
	//xhr.open("GET","https://api.meetup.com/2/open_events.json?topic=photo&time=,1w&key=7407e82d507911451e5f721e23721e");
	//xhr.open("GET","https://api.meetup.com/2/open_events.json?topic=titanium&time=,1w&status=upcoming&city=pune&country=india&key=7407e82d507911451e5f721e23721e");
	//xhr.open("GET","https://api.meetup.com/2/open_events.json?topic=photo&time=,1w&key=7407e82d507911451e5f721e23721e");
	xhr.open("GET","https://api.meetup.com/2/open_events.json?topic=photo&time=,1w&page=3&offset=1&key=7407e82d507911451e5f721e23721e");
	xhr.send();
	
//} 
// force tables to update
Alloy.Collections.Events.fetch();
});

$.meetupview.addEventListener('myblur', function( e ){
  //The view has just been blurred
  Ti.API.info('meetup blur()');
});
