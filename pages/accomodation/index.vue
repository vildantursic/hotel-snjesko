<template>
  <section class="container">
    <app-header/>
    <div class="content">
      <section class="box section1 top odd">
        <h1 class="section-title">Accomodation</h1>
        <div class="quote">
          <blockquote>
            We'll warm your hart on coldest days
          </blockquote>
        </div>
      </section>
      <section class="box section2 even">
        <div class="box-content small">
          <button class="stats-button" :class="{ active: stats }" type="button" name="button" v-on:click="showStats()">
            <span v-if="stats">Stats in Graph format</span>
            <span v-if="!stats">Stats in Text format</span>
          </button>
        </div>
        <div v-if="stats" class="box-content hotel-stats-text">
          <h1>Hotel statistics</h1>
          <p>Hotel Snjesko can accomodate 79 people in it's 25 rooms</p>
          <ul class="snjesko-list">
            <li>double</li>
            <li>triple</li>
            <li>quadruple rooms and</li>
            <li>rooms with gallery, projected for 5 people</li>
          </ul>
          <p>Each room has a TV, and a private bathroom</p>
        </div>
        <div v-if="!stats" class="box-content hotel-stats">
          <div class="large">
            <div class="img-box">
              <img src="/icons/room.png" alt="">
            </div>
            <span class="text">ROOMS</span>
            <span>25</span>
          </div>
          <div class="large">
            <div class="img-box">
              <img src="/icons/family.png" alt="">
            </div>
            <span class="text">PEOPLE</span>
            <span>79</span>
          </div>
          <div class="medium">
            <span class="text">ROOMS FOR</span>
            <span>2, 3, 4</span>
            <span class="text">&</span>
            <span>5</span>
          </div>
          <img class="plus" src="/icons/plus.png" alt="">
          <div class="medium">
            <img src="/icons/tv.png" alt="">
            <img class="plus" src="/icons/plus.png" alt="">
            <img src="/icons/shower.png" alt="">
          </div>
          <img class="plus" src="/icons/plus.png" alt="">
          <div class="medium">
            <img src="/icons/restaurant.png" alt="">
            <img class="plus" src="/icons/plus.png" alt="">
            <img src="/icons/bar.png" alt="">
          </div>
        </div>
        <div class="image-box">
          <h1>Place which will make you feel like at home</h1>
          <app-slider v-bind:images="images" :small="true"></app-slider>
        </div>
      </section>
      <section class="box section5 bottom odd">
        <AppFooter/>
      </section>
    </div>
  </section>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import AppSlider from '~/components/AppSlider.vue'

export default {
  data() {
    return {
      stats: false,
      images: [
        'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
        'images/4.jpg',
        'images/5.jpg',
        'images/6.jpg',
        'images/7.jpg',
        'images/8.jpg',
        'images/9.jpg',
        'images/10.jpg',
        'images/11.jpg',
        'images/12.jpg',
        'images/13.jpg',
        'images/14.jpg',
        'images/15.jpg',
        'images/16.jpg',
        'images/17.jpg',
        'images/18.jpg',
        'images/19.jpg',
        'images/20.jpg',
        'images/21.jpg',
        'images/22.jpg',
        'images/23.jpg',
        'images/24.jpg',
        'images/25.jpg',
        'images/26.jpg',
        'images/27.jpg',
        'images/28.jpg',
        'images/29.jpg',
        'images/30.jpg',
      ]
    }
  },
  components: {
    AppHeader,
    AppFooter,
    AppSlider
  },
  methods: {
    showStats() {
      this.stats = this.stats ? false : true;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/home.scss";

.small {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stats-button {
  font-size: 1em;
  border: 1px solid #9dd1ff;
  border-radius: 10px;
  color: #348EFE;
  background: transparent;
  display: inline-block;
  margin: 25px 0;
  padding: 15px 35px;
  text-decoration: none;
  transition: all 150ms ease-in-out;

  &:hover {
    background-color: #e1f1ff;
    outline: none;
  }
  &:focus {
    outline: none;
  }
}

.stats-button.active {
  background-color: #48aaff;
  color: #fff;

  &:hover {
    background-color: #269aff;
  }
}

.hotel-stats {
  display: flex;
  align-items: center;

  @include responsiveness('sm', 'xs') { flex-direction: column };

  .default {
    height: 300px;
    border: solid 1px #016ff9;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .img-box {
      width: 100%;
      height: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    * {
      margin: 5px 0;
    }

    .text {
      opacity: 0.57;
      text-align: center;
    }
    span {
      font-size: 2em;
      color: #222222;
      font-weight: bolder;
    }
  }

  .plus {
    height: 25px;
  }

  .medium {
    width: calc((100% / 3) - 20px);
    @extend .default;
    @include responsiveness('sm', 'xs') { width: 100% };
  }
  .large {
    width: calc((100% / 2) - 20px);
    @extend .default;
    @include responsiveness('sm', 'xs') { width: 100% };
  }
}

.image-box {
  text-align: center;
}

</style>
