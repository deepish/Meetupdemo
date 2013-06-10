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
    $.__views.id = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "16dp"
        },
        id: "id",
        text: "undefined" != typeof $model.__transform["id"] ? $model.__transform["id"] : $model.get("id")
    });
    $.__views.__alloyId0.add($.__views.id);
    $.__views.status = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "16dp"
        },
        id: "status",
        text: "undefined" != typeof $model.__transform["status"] ? $model.__transform["status"] : $model.get("status")
    });
    $.__views.__alloyId0.add($.__views.status);
    $.__views.time = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "16dp"
        },
        id: "time",
        text: "undefined" != typeof $model.__transform["time"] ? $model.__transform["time"] : $model.get("time")
    });
    $.__views.__alloyId0.add($.__views.time);
    $.__views.event_url = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "16dp"
        },
        id: "event_url",
        text: "undefined" != typeof $model.__transform["event_url"] ? $model.__transform["event_url"] : $model.get("event_url")
    });
    $.__views.__alloyId0.add($.__views.event_url);
    $.__views.description = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "16dp"
        },
        id: "description",
        text: "undefined" != typeof $model.__transform["description"] ? $model.__transform["description"] : $model.get("description")
    });
    $.__views.__alloyId0.add($.__views.description);
    $.__views.group_id = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "16dp"
        },
        id: "group_id",
        text: "undefined" != typeof $model.__transform["group_id"] ? $model.__transform["group_id"] : $model.get("group_id")
    });
    $.__views.__alloyId0.add($.__views.group_id);
    $.__views.group_lat = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "16dp"
        },
        id: "group_lat",
        text: "undefined" != typeof $model.__transform["group_lat"] ? $model.__transform["group_lat"] : $model.get("group_lat")
    });
    $.__views.__alloyId0.add($.__views.group_lat);
    $.__views.group_name = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "16dp"
        },
        id: "group_name",
        text: "undefined" != typeof $model.__transform["group_name"] ? $model.__transform["group_name"] : $model.get("group_name")
    });
    $.__views.__alloyId0.add($.__views.group_name);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;