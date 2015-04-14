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



function initMap(data) {

	// find center
	console.log(data[1]);
	var latMin = data[0].lat;
	var latMax = data[0].lat;
	var lngMin = data[0].lng;
	var lngMax = data[0].lng;
	for ( var i = 0; i < data.length; i++ ) {
		if (data[i].lat < latMin) {latMin = data[i].lat;}
		if (data[i].lat > latMax) {latMax = data[i].lat;}
		if (data[i].lng < lngMin) {lngMin = data[i].lng;}
		if (data[i].lng > lngMax) {lngMax = data[i].lng;}
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
}
initMap(pois);

function initMarkers(data) {
	var markers = [];
	for ( var i = 0; i < data.length; i++ ) {

		var latLng = new google.maps.LatLng( data[i].lat, data[i].lng );
		markers.push( new google.maps.Marker(
			{
				position: latLng,
				map: map,
				title: data[i].name
			}
		));			
	}
	google.maps.event.addDomListener(window, 'load', initMap);
}
initMarkers(home);



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