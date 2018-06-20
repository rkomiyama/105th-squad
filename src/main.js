import Vue from 'vue'
import Vuetify from 'vuetify'
import VueMq from 'vue-mq'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuetify)

Vue.use(VueMq, {
  breakpoints: {
    mobile: 400,
    tablet: 768,
    laptop: 1264,
    desktop: Infinity
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
