<template>
  <section class="container">
    <app-header/>
    <div class="content">
      <section class="box section1 top odd">
        <app-snowman></app-snowman>
        <div class="hotel">
          <div class="rating">
            <a href="https://www.booking.com/hotel/ba/snjesko.en-gb.html">
              <img src="/booking-dot-com.png" alt="">
            </a>
            <span class="rating">8.1 / 10</span>
          </div>
          <div class="stars">
            <img src="/star.png" alt="">
            <img src="/star.png" alt="">
            <img src="/star.png" alt="">
          </div>
          <div class="rating">
            <a href="https://www.tripadvisor.com/Hotel_Review-g303194-d2235497-Reviews-Hotel_Snjesko-Jahorina_Republika_Srpska.html">
              <img src="/trip-advisor.png" alt="">
            </a>
            <span class="rating">3.5 / 5</span>
          </div>
        </div>
      </section>
      <section class="box section2 even">
        <div class="slider-box">
          <app-slider v-bind:images="images"></app-slider>
        </div>
      </section>
      <section class="box section3 odd">
        <div class="fun-section">
          <img class="mountain-img" src="/mountain.jpg" alt="">
          <div class="fun-section-content">
            <h1>Welcome to Hotel Snjesko</h1>
            <p>
              Hotel Snješko is a modern, newly built facility in Jahorina. Due to the attractive location, high quality construction and fascinating interior, effectively integrated with the mountain style full of natural materials and authentic ethnic details, this hotel represents an ideal place for your vacation.
            </p>
            <p>
              Free Internet access, private parking and transportation to the bus stations and airports are just some of the benefits that we offer to our guests. The hotel consists of 25 comfortable rooms with private toilet, dining room with modern kitchen and fireplace room for the whole-evening relaxation in front of the open fireplace, where you can enjoy a lot of parties and gatherings. New Year's Eve is always celebrated here, with live music, a lot of fun and good vibes. Hotel offers half board and bed & breakfast accommodation with excellent service and professionalism. The diverse offer of dishes is served in the form of buffet during dinners and breakfasts included in your half board.
            </p>
            <p>
              One of the strongest points this hotel owes is definitely its position. Snješko is situated on Poljice, near the most beautiful Poljice ski trail and newly build six-seats lift.
            </p>
          </div>
        </div>
      </section>
      <section class="box section4 even">
        <div class="hotel-info">
          <div class="">
            <AppWeather v-if="weather.currently"
                        v-bind:time="time"
                        v-bind:date="date"
                        v-bind:temp="weather.currently.temperature"
                        v-bind:cond="weather.currently.summary"
                        v-bind:loc="'Jahorina'"/>
          </div>

          <div class="map-box">
            <AppMap/>
          </div>
        </div>
      </section>
      <section class="box section5 bottom odd">
        <AppFooter/>
      </section>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

import AppLogo from '~/components/AppLogo.vue'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import AppSnowman from '~/components/AppSnowman.vue'
import AppSlider from '~/components/AppSlider.vue'
import AppWeather from '~/components/AppWeather.vue'
import AppMap from '~/components/AppMap.vue'

export default {
  data() {
    return {
      images: [
        '/hotel1.jpg',
        '/hotel2.jpg',
        '/jahorina.jpg',
        '/hotel1.jpg',
        '/hotel2.jpg',
        '/jahorina.jpg',
        '/hotel1.jpg',
        '/hotel2.jpg',
        '/jahorina.jpg'
      ],
      weather: [],
      errors: [],
      date: Date().split(' ').map((el, i) => i > 3 ? null : el).join(' '),
      time: Date().split(' ').map((el, i) => (i < 4 || i > 4) ? null : el).join('').split(':').map((el, i) => i > 1 ? null : el).join(':').slice(0,5)
    }
  },
  created() {
    axios.get(`https://crossorigin.me/https://api.darksky.net/forecast/27e7016367bae8c9d7126ed15dff44b5/43.7385,18.5636?units=auto`)
    .then(response => {
      console.log(response);
      this.weather = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  components: {
    AppLogo,
    AppHeader,
    AppFooter,
    AppSnowman,
    AppSlider,
    AppWeather,
    AppMap
  }
}
</script>

<style lang="scss" scoped>
@import "assets/home";
// @import "assets/mixins";

.hotel {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  div {
    margin: 0 20px;
  }
  .stars {
  }
  .rating {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      width: 50px;
    }
    span {
      font-size: 1.2em;
    }
  }

}

.hotel-info {
  display: flex;
  align-items: center;
  justify-content: space-around;

  .map-box {
    transform: perspective(300px) rotateY(-5deg);
    transform-origin: middle right;
    -webkit-font-smoothing: antialiased;
    backface-visibility: hidden;
  }
}

.fun-section {
  display: flex;
  align-items: center;
  flex-direction: row;

  @include responsiveness("sm", "xs") { flex-direction: column };

  .mountain-img {
    transform: perspective(300px) rotateY(5deg);
    transform-origin: middle right;
    -webkit-font-smoothing: antialiased;
    backface-visibility: hidden;
    width: 40%;
  }

  .fun-section-content {
    padding: 0 40px;

    h1 {
      font-size: 1.3em;
    }
  }
}

</style>
