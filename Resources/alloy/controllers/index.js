function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    var __alloyId1 = [];
    $.__views.__alloyId2 = Alloy.createController("AllEvents", {
        id: "__alloyId2"
    });
    __alloyId1.push($.__views.__alloyId2.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId3 = Alloy.createController("Meetup", {
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
        showPagingControl: "false",
        mainScroller: "true",
        lastPage: "0"
    });
    $.__views.win.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollableView.addEventListener("scrollEnd", function(e) {
        if (!e.source.mainScroller || e.source.lastPage == e.currentPage) return;
        e.source.views[e.source.lastPage].fireEvent("myblur", {
            scroller: e.source
        });
        e.source.views[e.currentPage].fireEvent("myfocus", {
            scroller: e.source
        });
        e.source.lastPage = e.currentPage;
    });
    $.win.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;