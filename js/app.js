/*
	API key: AIzaSyBWMekTXMrGU0DNq4CiFH5ZcFW8L_Wsm1A
*/

//--------------------MODEL--------------------//

var home = {
	'name': 'Blake\'s House',
	'lat': 32.759904, 
	'lng': -117.127454,
	'keywords': 'home, casa'
};

var pois = [
	home,
	{
		'name': 'Coin-Op Game Room',
		'lat': 32.7490327, 
		'lng': -117.1303769,
		'keywords': 'bar, video'
	},
	{
		'name': 'Soda Bar',
		'lat': 32.7398671,
		'lng': -117.1205925,
		'keywords': 'bar, music'
	},
	{
		'name': 'Seven Grand',
		'lat': 32.7486272, 
		'lng': -117.1286325,
		'keywords': 'bar, whiskey'
	},
	{
		'name': 'Rigoberto\'s Taco Shop',
		'lat': 32.7216101, 
		'lng': -117.0858673,
		'keywords': 'food, mexican'
	}
];



	// find center
	var latMin = pois[0].lat;
	var latMax = pois[0].lat;
	var lngMin = pois[0].lng;
	var lngMax = pois[0].lng;
	for ( var i = 0; i < pois.length; i++ ) {
		if (pois[i].lat < latMin) {latMin = pois[i].lat;}
		if (pois[i].lat > latMax) {latMax = pois[i].lat;}
		if (pois[i].lng < lngMin) {lngMin = pois[i].lng;}
		if (pois[i].lng > lngMax) {lngMax = pois[i].lng;}
	}
	var latCenter = (latMin + latMax) / 2;
	var lngCenter = (lngMin + lngMax) / 2;

	// init map
	var map = new google.maps.Map( document.getElementById( 'map-canvas' ),
		{
			center: { lat: latCenter, lng: lngCenter },
		 	zoom: 13
		}
	);



// function initMarkers(data) {
// 	var markers = [];
// 	for ( var i = 0; i < data.length; i++ ) {

// 		var latLng = new google.maps.LatLng( data[i].lat, data[i].lng );
// 		markers.push( new google.maps.Marker(
// 			{
// 				position: latLng,
// 				map: map,
// 				title: data[i].name
// 			}
// 		));			
// 	}
// 	google.maps.event.addDomListener(window, 'load', initMap);
// } 

// initMarkers(pois);



//--------------------VIEWMODEL--------------------//

function AppViewModel() {

	var self = this;

	this.poiList = ko.observableArray([]);
	this.searchInput = ko.observable('Type keywords here');

	this.poiList.push(home);

	this.searchPois = function() {

		console.log(self.searchInput);

		self.poiList.removeAll();
		for ( var i = 0; i < pois.length; i++ ) {

			var searchInputLC = self.searchInput().toLowerCase();
			var searchStringsLC = pois[i].name.toLowerCase() + pois[i].keywords.toLowerCase();

			if ( searchStringsLC.indexOf(searchInputLC) !== -1 ) {
				self.poiList.push( pois[i] );
			}
		}

		initMarkers(self.poiList);
	};
}

ko.applyBindings(new AppViewModel());