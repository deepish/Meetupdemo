$.row.addEventListener('click',function(e){


 	var expandedview = Alloy.createController('ExpandedView');
	expandedview.getView().open();
	
	Ti.App.fireEvent('details', { 	event_name : $model.get('event_name'),
									id : $model.get('id'),
									status : $model.get('status'),
									time : $model.get('time'),
									event_url : $model.get('event_url'),
									description : $model.get('description'),
									group_id : $model.get('group_id'),
									group_lat : $model.get('group_lat'),
									group_lon : $model.get('group_lon'),
									group_name : $model.get('group_name'),
									urlname : $model.get('urlname') });


});
