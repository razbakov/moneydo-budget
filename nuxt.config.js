
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'MoneyDo: Budget Planner',
    titleTemplate: '%s - MoneyDo: Budget Planner',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Interactive guide for Kakeibo and 50/30/20' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/vue-slider.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDzYyS_4-7ASot7FwJQEL-vU2C5Wk1YvNg",
          authDomain: "moneydo-budget-planner.firebaseapp.com",
          databaseURL: "https://moneydo-budget-planner.firebaseio.com",
          projectId: "moneydo-budget-planner",
          storageBucket: "moneydo-budget-planner.appspot.com",
          messagingSenderId: "267808774431",
          appId: "1:267808774431:web:003e061343fff161a1b82a",
          measurementId: "G-DZHSNBGX2T"
        },
        services: {
          analytics: true
        }
      }
    ]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
