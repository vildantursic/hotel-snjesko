<template>
  <section class="container">
    <app-header/>
    <div class="content">
      <section class="box section1 top odd">
        <h1 class="section-title">Prices</h1>
        <div class="quote">
          <blockquote>
            We'll warm your hart on coldest days
          </blockquote>
        </div>
      </section>
      <section class="box section2 even">
        <AppPrices/>
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
import AppPrices from '~/components/AppPrices.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    AppPrices
  }
}
</script>

<style lang="scss" scoped>
@import "assets/home.scss";

</style>
