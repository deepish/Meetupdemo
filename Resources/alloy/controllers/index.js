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
    var __alloyId5 = [];
    $.__views.__alloyId6 = Alloy.createController("AllEvents", {
        id: "__alloyId6"
    });
    __alloyId5.push($.__views.__alloyId6.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId7 = Alloy.createController("Meetup", {
        id: "__alloyId7"
    });
    __alloyId5.push($.__views.__alloyId7.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId8 = Alloy.createController("Facebook", {
        id: "__alloyId8"
    });
    __alloyId5.push($.__views.__alloyId8.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId5,
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