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
        <div class="box-content hotel-stats">
          <div class="large">
            <div class="img-box">
              <img src="/room.png" alt="">
            </div>
            <span class="text">ROOMS</span>
            <span>25</span>
          </div>
          <div class="large">
            <div class="img-box">
              <img src="/family.png" alt="">
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
          <img class="plus" src="/plus.png" alt="">
          <div class="medium">
            <img src="/tv.png" alt="">
            <img class="plus" src="/plus.png" alt="">
            <img src="/shower.png" alt="">
          </div>
          <img class="plus" src="/plus.png" alt="">
          <div class="medium">

          </div>
        </div>
        <div class="">
          <app-slider v-bind:images="images"></app-slider>
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
      ]
    }
  },
  components: {
    AppHeader,
    AppFooter,
    AppSlider
  }
}
</script>

<style lang="scss" scoped>
@import "assets/home.scss";

.hotel-stats {
  display: flex;
  align-items: center;

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
  }
  .large {
    width: calc((100% / 2) - 20px);
    @extend .default;
  }
}

</style>
