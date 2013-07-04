function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        className: "loc_row",
        dataId: "",
        id: "row",
        model: "undefined" != typeof $model.__transform["alloy_id"] ? $model.__transform["alloy_id"] : $model.get("alloy_id")
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId0"
    });
    $.__views.row.add($.__views.__alloyId0);
    $.__views.event_name = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: "20dp"
        },
        top: "2dp",
        height: Ti.UI.SIZE,
        left: "5dp",
        right: "5dp",
        id: "event_name",
        text: "undefined" != typeof $model.__transform["event_name"] ? $model.__transform["event_name"] : $model.get("event_name")
    });
    $.__views.__alloyId0.add($.__views.event_name);
    $.__views.time = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "16dp"
        },
        id: "time",
        text: "undefined" != typeof $model.__transform["time"] ? $model.__transform["time"] : $model.get("time")
    });
    $.__views.__alloyId0.add($.__views.time);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.row.addEventListener("click", function() {
        var expandedview = Alloy.createController("ExpandedView");
        expandedview.getView().open();
        Ti.App.fireEvent("details", {
            event_name: $model.get("event_name"),
            id: $model.get("id"),
            status: $model.get("status"),
            time: $model.get("time"),
            event_url: $model.get("event_url"),
            description: $model.get("description"),
            group_id: $model.get("group_id"),
            group_lat: $model.get("group_lat"),
            group_lon: $model.get("group_lon"),
            group_name: $model.get("group_name"),
            urlname: $model.get("urlname")
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;