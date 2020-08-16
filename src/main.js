//import Bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



import Vue from 'vue'

import router from './router'
import App from './App.vue'
import {BootstrapVue} from 'bootstrap-vue'
import VueSanitize from "vue-sanitize";


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
//library.add(faUserSecret)
library.add(faFacebook, faTwitter, faEnvelope)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


