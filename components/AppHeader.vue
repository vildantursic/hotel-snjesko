<template>
  <div class="navigation shadow-2">
    <div class="logo">
      <router-link :to="{ name: 'index', params: {} }">
        <AppLogo/> Hotel Snješko
      </router-link>
    </div>
    <ul class="links">
      <li><router-link :to="{ name: 'accomodation', params: {} }" active-class="active">Accomodation</router-link></li>
      <li><router-link :to="{ name: 'about', params: {} }" active-class="active">About</router-link></li>
      <li><router-link :to="{ name: 'prices', params: {} }" active-class="active">Prices</router-link></li>
    </ul>
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

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Niconne');
  @import "assets/mixins";

  .navigation {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    padding: 0 10%;
  }
  .navigation .logo {
      font-family: 'Niconne', cursive;
      font-size: 2em;
      font-weight: lighter;
  }
  .navigation .logo a svg {
    margin-right: 10px;
    width: 40px !important;
  }
  .navigation .logo a {
    display: flex;
    align-items: center;
  }

  .navigation .links {
    list-style: none;

    @include responsiveness("sm", "xs") { display: none; }
  }
  .navigation .links li {
    float: left;
    padding: 0 15px;
    text-transform: uppercase;
  }
  .active {
    // color: red !important;
    border-bottom: solid 1px #2196F3;
  }
</style>
