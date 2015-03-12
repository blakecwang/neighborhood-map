/*
	API key: AIzaSyBWMekTXMrGU0DNq4CiFH5ZcFW8L_Wsm1A
*/

function initialize() {
var mapOptions = {
  center: { lat: 32.759905, lng: -117.127455},
  zoom: 16
};
var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);