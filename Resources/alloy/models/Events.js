exports.definition = {
    config: {
        columns: {
            status: "text",
            id: "int",
            time: "int",
            event_url: "string",
            description: "string",
            event_name: "text",
            group_id: "string",
            group_lat: "double",
            group_lon: "double",
            group_name: "string",
            urlname: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "Events"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Events", exports.definition, []);

collection = Alloy.C("Events", exports.definition, model);

exports.Model = model;

exports.Collection = collection;