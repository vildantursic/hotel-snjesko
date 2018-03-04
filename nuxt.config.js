module.exports = {
  /*
  ** Headers of the page
  */
  modules: [
    '@nuxtjs/pwa',
  ],
  head: {
    title: 'hotel-snjesko',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Hotel, Snjesko, Jahorina, Aparmani, Appartmans'},
      { hid: 'description', name: 'description', content: 'Hotel Snješko is a modern, newly built facility in Jahorina. Due to the attractive location, high quality construction and fascinating interior, effectively integrated with the mountain style full of natural materials and authentic ethnic details, this hotel represents an ideal place for your vacation.' }
    ],
    script: [
      { src: 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    {src: 'assets/app.scss', lang: 'scss'},
    'swiper/dist/css/swiper.css'
  ],
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false }
  ]
}
