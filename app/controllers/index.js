
//Refence links for calling function from index
//http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.ScrollableView-property-currentPage
//http://stackoverflow.com/questions/16062363/titanium-alloy-accessing-ui-from-different-controllers
//http://stackoverflow.com/questions/16831973/titanium-get-current-view-on-scrollableview-and-add-an-item


/*
//To reach a table view use thsi
var currentView=$.scrollableView.getCurrentPage();
var viewArray=$.scrollableView.getViews();
alert(currentView);
viewArray[currentView].children[1].fromMeetup();*/


//$.scrollableView.children[currentView].fromMeetup();
//$.meetupview.fromMeetup();

//var meetupController=Alloy.createController('Meetup');
//meetupController.fromMeetup();

$.scrollableView.addEventListener('scrollEnd', function(e){
    if( !e.source.mainScroller || (e.source.lastPage == e.currentPage) ){
      return;
    }
    //Fire blur action on view we have just exited
    e.source.views[ e.source.lastPage ].fireEvent('myblur',{ 'scroller': e.source });
    //Fire focus action on view we are entering
    e.source.views[ e.currentPage ].fireEvent('myfocus',{ 'scroller': e.source });
    //Change lastPage to currentPage
    e.source.lastPage = e.currentPage;
});

$.win.open();
