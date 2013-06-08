function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        backgroundColor: "#48b"
    });
    $.__views.view3 && $.addTopLevelView($.__views.view3);
    $.__views.facebook = Ti.UI.createLabel({
        text: "Facebook",
        id: "facebook"
    });
    $.__views.view3.add($.__views.facebook);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;