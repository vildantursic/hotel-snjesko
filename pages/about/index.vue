<template>
  <section class="container">
    <app-header/>
    <div class="content">
      <section class="box section1 top odd">
        <h1 class="section-title">About</h1>
        <div class="quote">
          <blockquote>
            We'll warm your hart on coldest days
          </blockquote>
        </div>
      </section>
      <section class="box section2 even">
        <section>
          <img class="image-left" src="/images/jahorina.jpg" alt="">
          <div class="text-content">
            <p>
              Jahorina is one of the four Olympic mountains where the 14th Winter Olympics were held 1984. During this period, Jahorina has experienced the biggest boom. Today, Jahorina is still very popular destination for the winter holidays. Its highest peak is Ogorjelica located 1,916 m above the sea level. During summer mountain is covered with exceptionally green and thick grass, while in winter there is up to 3 meters of snow everywhere.
            </p>
            <p>
              Extraordinary configuration, high quality snow, suitable climate, long trails perfect for alpine skiing and gentle slopes (Paradise Valley) and many other advantages supports the statement that this mountain represents one of the most beautiful and famous ski centers. The average number of days with snow on Jahorina is 175, from October to the end of May. Jahorina is located only 30 kilometers from the main capital of Bosnia and Herzegovina – Sarajevo, and it is easily approachable from the airport.
            </p>
          </div>
        </section>
        <section>
          <div class="text-content">
            <p>
              The mountain offers over 20 km of groomed trails for alpine skiing, associated with four modern cable cars and four ski lifts with total capacity of 7500 skiers per hour. Modern ski-schools, rentals and other ski services are at the guests’ disposal.
            </p>
            <p>
              Winter starts from 15th of December and lasts until 15th of April, depending on snow conditions.
            </p>
            <p>
              In summer, Jahorina is suitable for footing, walking, picking mushrooms, berries and herbs. You can enjoy a picnic in the unspoiled nature, and relax in luxury facilities after it.
            </p>
          </div>
          <img class="image-right" src="/images/jahorina2.jpg" alt="">
        </section>
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

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
@import "assets/home.scss";

.text-content {
  padding: 100px 20px;

  @include responsiveness("sm", "xs") { padding: 50px 20px; };
}

.image {
  transform-origin: middle right;
  -webkit-font-smoothing: antialiased;
  backface-visibility: hidden;
  width: 40%;
  max-height: 400px;
  transition: ease .3s;

  @include responsiveness("sm", "xs") { width: 100%; };
}
.image-left {
  transform: perspective(300px) rotateY(10deg);
  @extend .image;

  &:hover {
    transform: perspective(300px) rotateY(5deg);
  }
}
.image-right {
  transform: perspective(300px) rotateY(-10deg);
  @extend .image;

  &:hover {
    transform: perspective(300px) rotateY(-5deg);
  }
}

.section2 {
  display: flex;
  align-items: center;
  flex-direction: column;

  section {
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;

    @include responsiveness("md", "sm", "xs") { flex-direction: column; };

    img {

    }
  }
}
</style>
