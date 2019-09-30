
const mapboxgl = require("mapbox-gl");



function buildMarker (longitude, latitude, icontype) {
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${icontype})`;
  return new mapboxgl.Marker(markerDomEl).setLngLat([longitude,latitude]);
}

module.exports = buildMarker;
