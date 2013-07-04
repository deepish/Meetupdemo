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
        backgroundColor: "#FFFFFF"
    });
    $.__views.detailswin && $.addTopLevelView($.__views.detailswin);
    $.__views.tabBar = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: "15%",
        left: "0",
        top: "0",
        id: "tabBar"
    });
    $.__views.detailswin.add($.__views.tabBar);
    $.__views.tab1 = Ti.UI.createView({
        width: Alloy.CFG.width,
        height: Ti.UI.SIZE,
        left: "2",
        top: "0",
        id: "tab1"
    });
    $.__views.tabBar.add($.__views.tab1);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "tab1",
        id: "__alloyId1"
    });
    $.__views.tab1.add($.__views.__alloyId1);
    $.__views.tab2 = Ti.UI.createView({
        width: Alloy.CFG.width,
        height: Ti.UI.SIZE,
        left: Alloy.CFG.lefttab2,
        top: "0",
        id: "tab2"
    });
    $.__views.tabBar.add($.__views.tab2);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "tab2",
        id: "__alloyId2"
    });
    $.__views.tab2.add($.__views.__alloyId2);
    $.__views.tab3 = Ti.UI.createView({
        width: Alloy.CFG.width,
        height: Ti.UI.SIZE,
        left: Alloy.CFG.lefttab3,
        top: "0",
        id: "tab3"
    });
    $.__views.tabBar.add($.__views.tab3);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "tab3",
        id: "__alloyId3"
    });
    $.__views.tab3.add($.__views.__alloyId3);
    $.__views.tab4 = Ti.UI.createView({
        width: Alloy.CFG.width,
        height: Ti.UI.SIZE,
        left: Alloy.CFG.lefttab4,
        top: "0",
        id: "tab4"
    });
    $.__views.tabBar.add($.__views.tab4);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "tab4",
        id: "__alloyId4"
    });
    $.__views.tab4.add($.__views.__alloyId4);
    $.__views.event_name = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "20%",
        right: "5",
        id: "event_name"
    });
    $.__views.detailswin.add($.__views.event_name);
    $.__views.group_name = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "30%",
        right: "5",
        id: "group_name"
    });
    $.__views.detailswin.add($.__views.group_name);
    $.__views.description = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "35%",
        id: "description"
    });
    $.__views.detailswin.add($.__views.description);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.App.addEventListener("details", function(e) {
        Ti.API.info("==============================================================Event listning");
        Ti.API.info("==============================================================" + e.event_name);
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
        $.event_name.setText(e.event_name);
        $.group_name.setText(e.group_name);
        $.description.setHtml(e.description);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;