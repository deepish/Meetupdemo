function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row",
        model: "undefined" != typeof $model.__transform["alloy_id"] ? $model.__transform["alloy_id"] : $model.get("alloy_id")
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId0 = Ti.UI.createView({
        id: "__alloyId0"
    });
    $.__views.row.add($.__views.__alloyId0);
    $.__views.event_name = Ti.UI.createLabel({
        id: "event_name",
        text: "undefined" != typeof $model.__transform["event_name"] ? $model.__transform["event_name"] : $model.get("event_name")
    });
    $.__views.__alloyId0.add($.__views.event_name);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;