<template lang="html">
  <div class="">
    <div id="map"></div>

    <script type="text/javascript">

      mapboxgl.accessToken = 'pk.eyJ1IjoidmlsZGFudHVyc2ljIiwiYSI6IjF5cnIxNDAifQ.ZwVGbqlH3ncrPBhobjrRpg';

      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v9',
        center: [18.564786, 43.736177],
        zoom: 17
      });

      // code from the next step will go here!
      var geojson = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [18.564786, 43.736177]
          },
          properties: {
            title: 'Hotel Snjesko',
            description: 'Jahorina'
          }
        }]
      };

      // add markers to map
      geojson.features.forEach(function(marker) {

        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .setPopup(
              new mapboxgl.Popup({ offset: 25 })
                  .setHTML(`
                    <h3>${marker.properties.title}</h3>
                    <p>${marker.properties.description}</p>
                    <img src="/hotel1.jpg" width="200"/>
                  `)
            )
            .addTo(map);
      });


    </script>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#map {
  width: 700px;
  height: 600px;
}

.marker {
  background-image: url('/hotel.png');
  background-size: cover;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.mapboxgl-popup {
  max-width: 200px;
}

.mapboxgl-popup-content {
  text-align: center;
  font-family: 'Open Sans', sans-serif;
}
</style>
