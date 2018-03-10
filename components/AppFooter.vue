<template>
  <footer>
    <div class="left">
      <h3>3D walktrough of hotel</h3>
    </div>
    <div class="center">
      <h3>More about Jahorina</h3>
      <div class="">
        <a href="">
          <img src="/jahorina-oc.png" alt="">
        </a>
      </div>
    </div>
    <div class="right">
      <h3>Contact</h3>
      <ul class="snjesko-list">
        <li><a href="mailto">info@hotelsnjesko.ba</a></li>
        <li><a>+387 63 718 648</a></li>
        <li><a target="_blank" href="https://www.booking.com/hotel/ba/snjesko.en-gb.html">Booking.com</a></li>
      </ul>
      <h3>Legal</h3>
      <ul class="snjesko-list">
        <li><router-link :to="{ name: 'terms-of-use', params: {} }">Terms of Use</router-link></li>
        <li><router-link :to="{ name: 'about', params: {} }">About us</router-link></li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "assets/mixins";

footer {
  padding-top: 150px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  color: white;

  @include responsiveness("sm", "xs") {
    flex-direction: column;
    padding: 0 10px;
  };

  a {
    &:hover {
      color: white;
    }
  }

  div {
    margin-bottom: 50px;
  }
}

</style>
