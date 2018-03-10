import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

Vue.filter('translate', function (value) {
  if (!value) return ''

  // const lang = Vue.localStorage.get('lang');
  const lang = 'en';

  const translations = {
    EN: {
      HEADER: {
        ACCOMODATION: 'Accomodation',
        ABOUT: 'About',
        PRICING: 'Pricing'
      }
    },
    BA: {
      HEADER: {
        ACCOMODATION: 'Akomodacija',
        ABOUT: 'O Nama',
        PRICING: 'Cijene'
      }
    }
  }

  return getDescendantProp(translations, `${lang.toUpperCase()}.${value}`)
})

function getDescendantProp (obj, desc) {
  var arr = desc.split('.');
  while (arr.length && (obj = obj[arr.shift()]));
  return obj;
}
