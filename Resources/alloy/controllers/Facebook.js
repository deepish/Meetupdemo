function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.facebookview = Ti.UI.createView({
        id: "facebookview",
        backgroundColor: "#48b"
    });
    $.__views.facebookview && $.addTopLevelView($.__views.facebookview);
    $.__views.facebook = Ti.UI.createLabel({
        text: "Facebook",
        id: "facebook"
    });
    $.__views.facebookview.add($.__views.facebook);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.facebookview.addEventListener("myfocus", function() {
        alert("facebook focus()");
    });
    $.facebookview.addEventListener("myblur", function() {
        Ti.API.info("facebook blur()");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;