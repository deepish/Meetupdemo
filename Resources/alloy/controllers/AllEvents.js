function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.allevents = Ti.UI.createView({
        id: "allevents",
        backgroundColor: "#246"
    });
    $.__views.allevents && $.addTopLevelView($.__views.allevents);
    $.__views.events = Ti.UI.createLabel({
        text: "All Events",
        id: "events"
    });
    $.__views.allevents.add($.__views.events);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.allevents.addEventListener("myfocus", function() {
        alert("All events focus()");
    });
    $.allevents.addEventListener("myblur", function() {
        Ti.API.info("all events blur()");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;