/*
	API key: AIzaSyBWMekTXMrGU0DNq4CiFH5ZcFW8L_Wsm1A
*/


//----------- MODEL -----------//
var model = function() {

	var home = {
		'name': 'Blake\'s House',
		'lat': 32.759904, 
		'lng': -117.127454
	};

	var places = [
		{
			'name': home.name,
			'lat': home.lat, 
			'lng': home.lng
		},
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
			'name': 'Rigoberto\'s Taco Shop',
			'lat': 32.7216101, 
			'lng': -117.0858673
		}
	];
};

function initialize() {
	var mapOptions = {
	  center: { lat: 32.759905, lng: -117.127455},
	  zoom: 16
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);