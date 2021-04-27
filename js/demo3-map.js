mapboxgl.accessToken = 'pk.eyJ1IjoiZHVzdHN0YXIwMjEzIiwiYSI6ImNrbzBmZWN0eDBjeG0ydnJ0NHZrMjV6eTgifQ.uqIXMUPtfUk0PyyH7WlpCA'; // need to change
var hannahlocation = [37.7690643, -122.4033639]; // my current location
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/duststar0213/cko0eadj105ge17o12dgwbik7', // custom style url from https://studio.mapbox.com/
  center: hannahlocation, // starting position
  zoom: 15 // starting zoom
});

var popup = new mapboxgl.Popup({
  offset: 25
}).setText(
  'xiaohan liao'
);

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';

// create the marker
new mapboxgl.Marker(el)
  .setLngLat(hannahlocation)
  .setPopup(popup) // sets a popup on this marker
  .addTo(map);
