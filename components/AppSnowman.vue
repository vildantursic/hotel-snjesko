<template>
  <div class="snowman-logo">
    <AppLogo/>
    <h3>Hotel Snješko</h3>
    <h5>Jahorina</h5>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style scoped>

  .snowman-logo {
    font-family: 'Niconne', cursive;
    font-size: 2em;
    font-weight: lighter;
  }

  * {
    margin: 0;
  }
</style>
