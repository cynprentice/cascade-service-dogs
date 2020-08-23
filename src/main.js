//import custom css
import './styles/csd-styles.scss'


import Vue from 'vue'

import router from './router'
import App from './App.vue'
import {BootstrapVue} from 'bootstrap-vue'
import VueSanitize from "vue-sanitize";
import VueAnalytics from 'vue-analytics';


//Import FontAwesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

// Install BootstrapVue
Vue.use(BootstrapVue)

//Install HTML Sanitizer
Vue.use(VueSanitize);


//install FontAwesome Icons
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faFacebook, faTwitter, faEnvelope)

//Google Analytics

Vue.use(VueAnalytics, {
  id: 'UA-176126579-1',
  router
})

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

