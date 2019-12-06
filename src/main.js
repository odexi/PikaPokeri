// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import store from './store'
import vuetify from './plugins/vuetify';

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  vuetify,
  template: '<App/>'
})
