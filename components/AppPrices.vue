<template>
  <div class="background">
    <div class="container">
      <div class="panel pricing-table">

        <div class="pricing-plan">
          <div class="pricing-img-wrapper">
            <img src="/bed-blue.png" alt="" class="pricing-img xs">
          </div>
          <h2 class="pricing-header">2 Beds</h2>
          <ul class="pricing-features">
            <li class="pricing-features-item">Amazing for couples</li>
            <li class="pricing-features-item">Astonishing view from hotel</li>
          </ul>
          <span class="pricing-price">€40</span>
          <a target="_blank" href="https://www.booking.com/hotel/ba/snjesko.en-gb.html" class="pricing-button">Reserve</a>
        </div>

        <div class="pricing-plan">
          <div class="pricing-img-wrapper">
            <img src="/bed-blue.png" alt="" class="pricing-img sm">
          </div>
          <h2 class="pricing-header">3 Beds</h2>
          <ul class="pricing-features">
            <li class="pricing-features-item">Amazing for family</li>
            <li class="pricing-features-item">Astonishing view from hotel</li>
          </ul>
          <span class="pricing-price">€35</span>
          <a target="_blank" href="https://www.booking.com/hotel/ba/snjesko.en-gb.html" class="pricing-button is-featured">Reserve</a>
        </div>

        <div class="pricing-plan">
          <div class="pricing-img-wrapper">
            <img src="/bed-blue.png" alt="" class="pricing-img md">
          </div>
          <h2 class="pricing-header">4 Beds</h2>
          <ul class="pricing-features">
            <li class="pricing-features-item">Amazing for family</li>
            <li class="pricing-features-item">Astonishing view from hotel</li>
          </ul>
          <span class="pricing-price">€30</span>
          <a target="_blank" href="https://www.booking.com/hotel/ba/snjesko.en-gb.html" class="pricing-button">Reserve</a>
        </div>

        <div class="pricing-plan">
          <div class="pricing-img-wrapper">
            <img src="/bed-blue.png" alt="" class="pricing-img lg">
          </div>
          <h2 class="pricing-header">5 Beds</h2>
          <ul class="pricing-features">
            <li class="pricing-features-item">Amazing for group of friends</li>
            <li class="pricing-features-item">Astonishing view from hotel</li>
          </ul>
          <span class="pricing-price">€30</span>
          <a target="_blank" href="https://www.booking.com/hotel/ba/snjesko.en-gb.html" class="pricing-button">Reserve</a>
        </div>

      </div>
    </div>

    <div class="second-section">
      <div class="container">
        <h1>NOTE</h1>
        <ul class="pricing-features">
          <li class="pricing-features-item">The restaurant bar and reception are opened 24 hours a day</li>
          <li class="pricing-features-item">Free Wi-Fi</li>
          <li class="pricing-features-item">Parking in front of the hotel</li>
          <li class="pricing-features-item">Free accommodation for children under 5 years</li>
          <li class="pricing-features-item">Children from 5 to 12 years have a 50% discount on the same bed, and 30% discount on separate bed</li>
          <li class="pricing-features-item">In the group of 30 people, 1 person free of charge</li>
          <li class="pricing-features-item">Check-in takes place at 14h and check-out is before 12 h</li>
          <li class="pricing-features-item">Local tax and insurance is not included and must be paid upon arrival (1.3 euros per person per day)</li>
          <li class="pricing-features-item">Smoking is allowed only in the fireplace room</li>
          <li class="pricing-features-item">No pets allowed</li>
        </ul>
      </div>

      <div class="container">
        <h1>RESERTAVIONS</h1>
        <div class="">
          <AppForm/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppForm from '@/components/AppForm'

export default {
  components: {
    AppForm
  }
}
</script>

<style lang="scss" scoped>
@import "assets/mixins";

*, *:before, *:after {
  box-sizing: inherit;
}

.background {
  padding: 0 25px 25px;
  position: relative;
  width: 100%;
}

@media (min-width: 900px) {
  .background {
    padding: 0 0 25px;
  }
}

.container {
  margin: 0 auto;
  padding: 50px 0 0;
  max-width: 90%;
  width: 100%;
}

.second-section {
  padding: 3em 50px;
  display: flex;
  justify-content: center;

  .container {
    padding: 0 25px;
  }

  @include responsiveness('sm', 'xs') {
     padding: 10px 0;
     flex-direction: column;

     .container {
       padding: 0;
     }
  };
}

.panel {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px 25px;
  position: relative;
  width: 100%;
  z-index: 10;
}

.pricing-table {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08), 0px 20px 31px 3px rgba(0, 0, 0, 0.09), 0px 8px 20px 7px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: row;

  @include responsiveness('md', 'sm', 'xs') {
    flex-direction: column;
  };
}

.pricing-table * {
  text-align: center;
  text-transform: uppercase;
}

.pricing-plan {
  border-bottom: 1px solid #e1f1ff;
  padding: 25px;
}

.pricing-plan:last-child {
  border-bottom: none;
}

@media (min-width: 900px) {
  .pricing-plan {
    border-bottom: none;
    border-right: 1px solid #e1f1ff;
    flex-basis: 100%;
    padding: 25px 50px;
  }

  .pricing-plan:last-child {
    border-right: none;
  }
}

.pricing-img-wrapper {
  font-size: 1.6em;
  height: 180px;
  background: #f1f8ff;
  background: radial-gradient(circle, #f1f8ff 40%, white 40%, white);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}
.pricing-img {
  max-width: 100%;
}
.xs {
  width: 1em;
}
.sm {
  width: 1.2em;
}
.md {
  width: 1.4em;
}
.lg {
  width: 1.6em;
}

.pricing-header {
  color: #888;
  font-weight: 600;
  letter-spacing: 1px;
}

.pricing-features {
  padding: 0;
  color: #016FF9;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 50px 0 25px;
}

.pricing-features-item {
  border-top: 1px solid #e1f1ff;
  font-size: 12px;
  line-height: 1.5;
  padding: 15px 0;
}

.pricing-features-item:last-child {
  border-bottom: 1px solid #e1f1ff;
}

.pricing-price {
  color: #016FF9;
  display: block;
  font-size: 32px;
  font-weight: 700;
}

.pricing-button {
  border: 1px solid #9dd1ff;
  border-radius: 10px;
  color: #348EFE;
  display: inline-block;
  margin: 25px 0;
  padding: 15px 35px;
  text-decoration: none;
  transition: all 150ms ease-in-out;
}

.pricing-button:hover,
.pricing-button:focus {
  background-color: #e1f1ff;
}

.pricing-button.is-featured {
  background-color: #48aaff;
  color: #fff;
}

.pricing-button.is-featured:hover,
.pricing-button.is-featured:active {
  background-color: #269aff;
}
</style>
