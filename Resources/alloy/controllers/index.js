function Controller() {
    function doOpen() {
        alert("opening main");
        var viewArray = $.scrollableView.getViews();
        viewArray[1].fromMeetup();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    doOpen ? $.__views.win.addEventListener("open", doOpen) : __defers["$.__views.win!open!doOpen"] = true;
    var __alloyId1 = [];
    $.__views.__alloyId2 = Alloy.createController("Meetup", {
        id: "__alloyId2"
    });
    __alloyId1.push($.__views.__alloyId2.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId3 = Alloy.createController("AllEvents", {
        id: "__alloyId3"
    });
    __alloyId1.push($.__views.__alloyId3.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId4 = Alloy.createController("Facebook", {
        id: "__alloyId4"
    });
    __alloyId1.push($.__views.__alloyId4.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId1,
        id: "scrollableView",
        showPagingControl: "true"
    });
    $.__views.win.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win.open();
    __defers["$.__views.win!open!doOpen"] && $.__views.win.addEventListener("open", doOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;