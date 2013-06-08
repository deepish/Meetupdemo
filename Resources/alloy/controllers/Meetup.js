function Controller() {
    function __alloyId11() {
        var models = __alloyId10.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId8 = models[i];
            __alloyId8.__transform = {};
            var __alloyId9 = Alloy.createController("EventRow", {
                $model: __alloyId8
            });
            rows.push(__alloyId9.getViewEx({
                recurse: true
            }));
        }
        $.__views.tableview.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("Events");
    $.__views.meetupview = Ti.UI.createView({
        id: "meetupview",
        backgroundColor: "#123"
    });
    $.__views.meetupview && $.addTopLevelView($.__views.meetupview);
    $.__views.meetup = Ti.UI.createLabel({
        text: "Meetup",
        id: "meetup"
    });
    $.__views.meetupview.add($.__views.meetup);
    $.__views.tableview = Ti.UI.createTableView({
        id: "tableview"
    });
    $.__views.meetupview.add($.__views.tableview);
    var __alloyId10 = Alloy.Collections["Events"] || Events;
    __alloyId10.on("fetch destroy change add remove reset", __alloyId11);
    exports.destroy = function() {
        __alloyId10.off("fetch destroy change add remove reset", __alloyId11);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;