<template>
  <div v-swiper:mySwiper="swiperOption" class="my-swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(image, index) in images" v-bind:key="index">
        <img :src="image">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
  export default {
    props: ['images'],
    data () {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        }
      }
    },
    mounted() {
    }
  }
</script>


<style lang="scss" scoped>
  .my-swiper {
    height: 400px;
    width: 100%;
    overflow: hidden;

    .swiper-wrapper {

      .swiper-slide {
        text-align: center;
        font-size: 38px;
        font-weight: 700;
        background-color: #eee;

        img {
          height: 100%;
        }
      }
    }
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
</style>
