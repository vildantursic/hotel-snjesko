<template>
  <div class="">
    <div class="group">
      <div class="sliding-el" id="sliding-el"></div>
      <div class="button-group">
        <button v-for="(language, i) of languages" :key="i" class="btn" v-on:click="moveSlider(language.code)">{{language.text}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['languages'],
  data() {
    return {
      slidingEl: undefined
    }
  },
  mounted: function() {
    if (process.browser) {
      this.slidingEl = document.getElementById("sliding-el");
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$emit('onLanguageChange', lang);
    },
    moveSlider(btn) {
      switch(btn) {
        case 'en':
          this.slidingEl.style.left = "0";
          break;
        case 'ba':
          this.slidingEl.style.left = "30px";
          break;
        default:
          this.slidingEl.style.left = "0";
      }
      this.changeLanguage(btn);
    }
  }
}
</script>

<style lang="scss">
.group {
  position: relative;
  width: auto;
  height: 30px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  .sliding-el {
    position: absolute;
    width: 30px;
    height: 30px;
    background: #2196F3;
    z-index: -1;
    left: calc(30px);
    transition: ease .3s;
  }

  .button-group {

    .btn {
      width: 30px;
      height: 30px;
      border: solid 1px #2196F3;
      background: transparent;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      .active {
        color: white;
      }
    }
  }
}
</style>
