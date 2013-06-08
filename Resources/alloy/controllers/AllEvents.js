function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        backgroundColor: "#246"
    });
    $.__views.view2 && $.addTopLevelView($.__views.view2);
    $.__views.events = Ti.UI.createLabel({
        text: "All Events",
        id: "events"
    });
    $.__views.view2.add($.__views.events);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;