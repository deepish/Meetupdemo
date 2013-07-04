// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

var spacer = Math.round(Ti.Platform.displayCaps.platformWidth*0.25);
Alloy.CFG.width=spacer-4;
Alloy.CFG.lefttab2=spacer;
Alloy.CFG.lefttab3=spacer*2;
Alloy.CFG.lefttab4=spacer*3;