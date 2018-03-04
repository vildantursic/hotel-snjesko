<template lang="html">
  <div class="">
    <mapbox :access-token="token"
            @map-load="mapLoaded"
            @map-click="mapClicked"></mapbox>
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl-vue';

// mapboxgl.accessToken = ;
//
// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/light-v9',
//   center: [18.564786, 43.736177],
//   zoom: 17
// });
//
// // code from the next step will go here!
// var geojson = {
//   type: 'FeatureCollection',
//   features: [{
//     type: 'Feature',
//     geometry: {
//       type: 'Point',
//       coordinates: [18.564786, 43.736177]
//     },
//     properties: {
//       title: 'Hotel Snjesko',
//       description: 'Jahorina'
//     }
//   }]
// };
//
// // add markers to map
// geojson.features.forEach(function(marker) {
//
//   // create a HTML element for each feature
//   var el = document.createElement('div');
//   el.className = 'marker';
//
//   // make a marker for each feature and add to the map
//   setTimeout(function() {
//     new mapboxgl.Marker(el)
//         .setLngLat(marker.geometry.coordinates)
//         .setPopup(
//           new mapboxgl.Popup({ offset: 25 })
//               .setHTML(`
//                 <h3>${marker.properties.title}</h3>
//                 <p>${marker.properties.description}</p>
//                 <img src="/hotel1.jpg" width="200"/>
//               `)
//         )
//         .addTo(map);
//   }, 1000)
// });

export default {
  data() {
    return {
      token: 'pk.eyJ1IjoidmlsZGFudHVyc2ljIiwiYSI6IjF5cnIxNDAifQ.ZwVGbqlH3ncrPBhobjrRpg'
    }
  },
  components: {
    Mapbox
  },
  methods: {
    mapLoaded(map) {
      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': [{
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [-77.03238901390978, 38.913188059745586]
              },
              'properties': {
                'title': 'Mapbox DC',
                'icon': 'monument'
              }
            }, {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [-122.414, 37.776]
              },
              'properties': {
                'title': 'Mapbox SF',
                'icon': 'harbor'
              }
            }]
          }
        },
        'layout': {
          'icon-image': '{icon}-15',
          'text-field': '{title}',
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top'
        }
      });
    },
    mapClicked(map, e) {
      alert('Map Clicked!');
    },
  }
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
