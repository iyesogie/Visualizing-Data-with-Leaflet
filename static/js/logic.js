/ Visualizing-Data-with-Leaflet - logic.js

// Earthquakes & Tectonic Plates GeoJSON URL Variables
var earthquakesURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"

d3.json(earthquakesURL).then(function(data) {
    createMap(data.features);
});