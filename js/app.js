/*
	API key: AIzaSyBWMekTXMrGU0DNq4CiFH5ZcFW8L_Wsm1A
*/


var home = {
	'name': 'Blake\'s House',
	'lat': 32.759904, 
	'lng': -117.127454
};


var places = [
	home,
	{
		'name': 'Coin-Op Game Room',
		'lat': 32.7490327, 
		'lng': -117.1303769
	},
	{
		'name': 'Soda Bar',
		'lat': 32.7398671,
		'lng': -117.1205925
	},
	{
		'name': 'Seven Grand',
		'lat': 32.7486272, 
		'lng': -117.1286325
	},
	{
		'name': 'Rigoberto\'s Taco Shop',
		'lat': 32.7216101, 
		'lng': -117.0858673
	}
];


function init() {

	// find center
	var latMin = places[0].lat;
	var latMax = places[0].lat;
	var lngMin = places[0].lng;
	var lngMax = places[0].lng;
	for ( var i = 0; i < places.length; i++ ) {
		if (places[i].lat < latMin) {latMin = places[i].lat;}
		if (places[i].lat > latMax) {latMax = places[i].lat;}
		if (places[i].lng < lngMin) {lngMin = places[i].lng;}
		if (places[i].lng > lngMax) {lngMax = places[i].lng;}
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


	//init markers
	var markers = [];
	for ( var i = 0; i < places.length; i++ ) {

		var latLng = new google.maps.LatLng( places[i].lat, places[i].lng );
		markers.push( new google.maps.Marker(
			{
				position: latLng,
				map: map,
				title: places[i].name
			}
		));
		console.log( places[i].name + ' was added.' );
		
	}
}
google.maps.event.addDomListener(window, 'load', init);

