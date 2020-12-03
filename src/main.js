import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/sass/index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Modal from '@/components/ui/Modal.vue'

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('Modal', Modal)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
