const mapboxgl = require("mapbox-gl");
const createMarker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoidGltY2h1OTIiLCJhIjoiY2sxNmxubDM4MDBibTNnbm52MWQxYm83OCJ9.ZPjwP7Ymvt0_HBMXN3RVXw';
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker({color: '#a13333'}).setLngLat([-74.009, 40.705]).addTo(map);

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

const activity = 'http://i.imgur.com/WbMOfMl.png'
const hotel = `http://i.imgur.com/D9574Cu.png`
const restaurant = `http://i.imgur.com/cqR6pUI.png`
createMarker(-74.009, 40.705,activity).addTo(map);
