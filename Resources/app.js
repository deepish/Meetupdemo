var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var spacer = Math.round(.25 * Ti.Platform.displayCaps.platformWidth);

Alloy.CFG.width = spacer - 4;

Alloy.CFG.lefttab2 = spacer;

Alloy.CFG.lefttab3 = 2 * spacer;

Alloy.CFG.lefttab4 = 3 * spacer;

Alloy.createController("index");