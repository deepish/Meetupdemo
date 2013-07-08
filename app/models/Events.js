exports.definition = {
	config: {
		columns: {
		    "status": "text",
		    "id": "int",
		    "time": "int",
		    "event_url": "string",
		    "description": "string",
		    "event_name": "text",
		    "group_id": "string",
		    "group_lat": "double",
		    "group_lon": "double",
		    "group_name": "string",
		    "urlname": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "Events"
		}
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});
		
		return Model;
	},
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});
		
		return Collection;
	}
}

