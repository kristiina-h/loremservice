
// map
//https://docs.microsoft.com/en-us/bingmaps/v8-web-control/map-control-concepts/infoboxes/infobox-when-pushpin-clicked
var mapAPIKey = "AqLLRE37SJGqIxXEYxezPUa6fF2oCzl3cvG4n05FtFIVBrotBYxchpMYYpwuxBak";

var map, infobox;

function GetMap() {
    
    "use strict";

    var centerPoint = new Microsoft.Maps.Location(
            58.38104, 
            26.71992
        );
        


    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: centerPoint,
        zoom: 15,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });
    
      //Create an infobox at the center of the map but don't show it.
        infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
            visible: false
        });

        //Assign the infobox to a map instance.
        infobox.setMap(map);
    var pushpin = new Microsoft.Maps.Pushpin(centerPoint, {
            title: 'Lorem Service',
            //subTitle: 'Hea koht',
            //text: 'UT'
        });
   //Store some metadata with the pushpin. 
    pushpin.metadata = {
            title: 'Lorem Service',
            description: 'Professionaalide meeskond, kes suudab teha isegi keerulised tööd õigeks ajaks.'
        }; 
    Microsoft.Maps.Events.addHandler(pushpin, 'click', pushpinClicked);
    map.entities.push(pushpin);
    
   

   function pushpinClicked(e) {
        //Make sure the infobox has metadata to display.
        if (e.target.metadata) {
            //Set the infobox options with the metadata of the pushpin.
            infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.title,
                description: e.target.metadata.description,
                visible: true
            });
        }
    }
}

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE

