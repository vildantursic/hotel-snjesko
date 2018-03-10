<template>
  <div class="navigation shadow-2">
    <div class="logo">
      <router-link :to="{ name: 'index', params: {} }">
        <AppLogo/> Hotel Snješko
      </router-link>
    </div>
    <ul class="links">
      <li><router-link :to="{ name: 'accomodation', params: {} }" active-class="active">{{'HEADER.ACCOMODATION' | translate}}</router-link></li>
      <li><router-link :to="{ name: 'about', params: {} }" active-class="active">{{'HEADER.ABOUT' | translate}}</router-link></li>
      <li><router-link :to="{ name: 'prices', params: {} }" active-class="active">{{'HEADER.PRICING' | translate}}</router-link></li>
      <li><AppLanguage :languages="languages" @onLanguageChange="languageChanged"/></li>
    </ul>
    <div class="mobile-menu-button">
      <!-- <img src="/icons/bar.png" v-on:click="showMenu()"/> -->
      <svg v-on:click="showMenu()" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>
    </div>
    <div ref="mobileNavigation" class="mobile-navigation">
      <div class="mobile-menu-button" style="margin: 10px;">
        <!-- <img src="/icons/bar.png" v-on:click="showMenu()"/> -->
        <svg v-on:click="showMenu()" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18"><path d="M2 13.5h14V12H2v1.5zm0-4h14V8H2v1.5zM2 4v1.5h14V4H2z"/></svg>
      </div>
      <ul class="links-mobile">
        <li><router-link :to="{ name: 'accomodation', params: {} }" active-class="active">Accomodation</router-link></li>
        <li><router-link :to="{ name: 'about', params: {} }" active-class="active">About</router-link></li>
        <li><router-link :to="{ name: 'prices', params: {} }" active-class="active">Prices</router-link></li>
        <li><AppLanguage :languages="languages"/></li>
      </ul>
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import AppLanguage from '~/components/AppLanguage.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      show: false,
      lang: 'en',
      languages: [
        {
          code: 'en',
          text: 'En'
        },
        {
          code: 'ba',
          text: 'Ba'
        }
      ]
    }
  },
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
  methods: {
    showMenu () {
      this.show = !this.show;
      this.$refs.mobileNavigation.className = this.show ? "mobile-navigation show" : "mobile-navigation";
    },
    languageChanged (event) {
      this.lang = event;
    }
  },
  components: {
    AppLogo,
    AppLanguage
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

    @include responsiveness("sm", "xs") { padding: 0 2%; }
  }
  .navigation .logo {
      font-family: 'Niconne', cursive;
      font-size: 2em;
      font-weight: lighter;

      @include responsiveness("sm", "xs") { font-size: 1.3; }
  }
  .navigation .logo a svg {
    margin-right: 10px;
    width: 40px !important;
  }
  .navigation .logo a {
    display: flex;
    align-items: center;
  }

  .navigation .mobile-menu-button {
    display: none;
    @include responsiveness("sm", "xs") { display: block }

    img {
      width: 30px;
    }
  }

  .navigation .mobile-navigation {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    z-index: 10;
    right: -100vw;
    transition: ease .3s;

    @include responsiveness("sm", "xs") {
      display: flex;
      flex-direction: column;
    }
  }
  .navigation .mobile-navigation.show {
    right: 0vw;
  }
  .navigation .links-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0;

    li {
      padding: 15px 0;
    }
  }

  .navigation .links {
    list-style: none;
    display: flex;
    align-items: center;

    @include responsiveness("sm", "xs") { display: none; }
  }
  .navigation .links li {
    float: left;
    padding: 0 15px;
    text-transform: uppercase;
  }
  .active {
    border-bottom: solid 1px #2196F3;
  }
</style>
