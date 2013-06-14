$.row.addEventListener('click',function(e){
	var args = [];
	//args.push({name:'ABCD',value:'1234'});
	//var expandedview = Alloy.createController('ExpandedView', args);
	var expandedview = Alloy.createController('ExpandedView');
	expandedview.getView().open();
	//alert($model.get('status'));
	
	//expandedview.fireEvent('details', { name:'bar' });
	
	Ti.App.fireEvent('details', { 	name : $model.get('name'),
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
