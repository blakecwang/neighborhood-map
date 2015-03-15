/*
	API key: AIzaSyBWMekTXMrGU0DNq4CiFH5ZcFW8L_Wsm1A
*/


var home = {
		'name': 'Blake\'s House',
		'lat': 32.759904, 
		'lng': -117.127454
	};

//----------- MODEL -----------//
var model = function() {

	

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
};

function init() {

	var mapOptions = {
	  center: { lat: home.lat, lng: home.lng},
	  zoom: 16
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var latLng = new google.maps.LatLng(home.lat, home.lng);
	var markerOptions = {
		position: latLng,
		map: map,
		title: home.name
	};
	var marker = new google.maps.Marker(markerOptions);
	
}
google.maps.event.addDomListener(window, 'load', init);

