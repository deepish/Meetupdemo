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
    $.meetupview.addEventListener("myfocus", function() {
        Ti.API.info("seeded: " + Ti.App.Properties.hasProperty("seeded"));
        var xhr = Titanium.Network.createHTTPClient();
        xhr.onload = function() {
            Ti.API.info("*****---------------------------------->got data from the network: " + this.responseText);
            var json = JSON.parse(this.responseText);
            alert(json.results.length);
            for (var i = 0, j = json.results.length; j > i; i++) {
                Ti.API.info("*****---------------------------------->got data from the network part 2: " + json.results[i].name);
                var event = Alloy.createModel("Events", {
                    id: json.results[i].id,
                    event_name: json.results[i].name,
                    status: json.results[i].status,
                    time: json.results[i].time,
                    event_url: json.results[i].event_url,
                    description: json.results[i].description,
                    group_id: json.results[i].group.id,
                    group_lat: json.results[i].group.group_lat,
                    group_lon: json.results[i].group.group_lon,
                    group_name: json.results[i].group.name,
                    urlname: json.results[i].group.urlname
                });
                event.save();
            }
            Ti.App.Properties.setString("seeded", "yuppers");
            Alloy.Collections.Events.fetch();
        };
        xhr.open("GET", "https://api.meetup.com/2/open_events.json?topic=photo&time=,1w&page=3&offset=1&key=7407e82d507911451e5f721e23721e");
        xhr.send();
        Alloy.Collections.Events.fetch();
    });
    $.meetupview.addEventListener("myblur", function() {
        Ti.API.info("meetup blur()");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;