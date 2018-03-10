<template lang="html">
  <div class="">
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    if (process.browser) {
      mapboxgl.accessToken = 'pk.eyJ1IjoidmlsZGFudHVyc2ljIiwiYSI6IjF5cnIxNDAifQ.ZwVGbqlH3ncrPBhobjrRpg';

      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v9',
        center: [18.564786, 43.736177],
        zoom: 16,
        interactive: false
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
                    <img src="/images/hotel1.jpg"/>
                    <div class="info">
                      <h3>${marker.properties.title}</h3>
                      <p>${marker.properties.description}</p>
                    </div>
                  `)
            )
            .addTo(map);
      });
    }
  }
}
</script>

<style lang="scss">
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
  position: relative;
  max-width: 300px;
  margin: 0;
  padding: 0;
  overflow: hidden;

  .mapboxgl-popup-content {
    overflow: hidden;
  }

  &:hover {
    img {
      transform: scale(1.4);
    }
  }

  img {
    height: 100%;
    width: 100%;
    transition: ease .5s;
    transform: scale(1.2);
  }

  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    color: white;
    background: #2196F3;
    padding: 5px;

    h3, p {
      margin: 0;
      padding: 0;
    }
  }
}

.mapboxgl-popup-content {
  font-family: 'Open Sans', sans-serif;
}
</style>
