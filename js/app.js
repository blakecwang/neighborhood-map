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

	// init map
	var map = new google.maps.Map( document.getElementById( 'map-canvas' ),
		{
			center: { lat: home.lat, lng: home.lng },
		 	zoom: 16
		}
	);

	// init markers
	for ( var i = 0; i < home.length; i++) {
		var latLng = new google.maps.LatLng( places[i].lat, places[i].lng );
		var marker = new google.maps.Marker(
			{
				position: latLng,
				map: map,
				title: places[i].name
			}
		);
	}
}
google.maps.event.addDomListener(window, 'load', init);

