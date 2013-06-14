function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.detailswin = Ti.UI.createWindow({
        id: "detailswin",
        title: "New window",
        modal: "true",
        opacity: "1",
        zIndex: "100",
        backgroundColor: "#FFFFFF"
    });
    $.__views.detailswin && $.addTopLevelView($.__views.detailswin);
    $.__views.event_name = Ti.UI.createLabel({
        id: "event_name"
    });
    $.__views.detailswin.add($.__views.event_name);
    $.__views.time = Ti.UI.createLabel({
        id: "time"
    });
    $.__views.detailswin.add($.__views.time);
    $.__views.id = Ti.UI.createLabel({
        id: "id"
    });
    $.__views.detailswin.add($.__views.id);
    $.__views.status = Ti.UI.createLabel({
        id: "status"
    });
    $.__views.detailswin.add($.__views.status);
    $.__views.event_url = Ti.UI.createLabel({
        id: "event_url"
    });
    $.__views.detailswin.add($.__views.event_url);
    $.__views.description = Ti.UI.createLabel({
        id: "description"
    });
    $.__views.detailswin.add($.__views.description);
    $.__views.group_id = Ti.UI.createLabel({
        id: "group_id"
    });
    $.__views.detailswin.add($.__views.group_id);
    $.__views.group_lat = Ti.UI.createLabel({
        id: "group_lat"
    });
    $.__views.detailswin.add($.__views.group_lat);
    $.__views.group_lon = Ti.UI.createLabel({
        id: "group_lon"
    });
    $.__views.detailswin.add($.__views.group_lon);
    $.__views.group_name = Ti.UI.createLabel({
        id: "group_name"
    });
    $.__views.detailswin.add($.__views.group_name);
    $.__views.urlname = Ti.UI.createLabel({
        id: "urlname"
    });
    $.__views.detailswin.add($.__views.urlname);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.App.addEventListener("details", function(e) {
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;