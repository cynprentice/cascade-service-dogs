import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Programs from './views/Programs.vue'
import ServiceDogs from './views/ServiceDogs.vue'
import Training from './views/Training.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Testimonials from './views/Testimonials.vue'
import Applications from './views/Applications.vue'
import PrivacyPolicy from './views/PrivacyPolicy.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    }
    /* from VUe school
     else {
      const position = {}
      if (to.hash){
        position.selector = to.hash;
        if (document.querySelector(to.hash)){
          return position;
        }
        return false
      }
    }
    */
    else if (to.hash) {
      return {
      selector: to.hash
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/programs',
        name: 'programs',
        component: Programs
      },
      {
        path: '/service-dogs',
        name: 'service-dogs',
        component: ServiceDogs
      },
      {
        path: '/training',
        name: 'training',
        component: Training
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact
      },
      {
        path: '/testimonials',
        name: 'testimonials',
        component: Testimonials
      },
      {
        path: '/applications',
        name: 'applications',
        component: Applications
      },
      {
        path: '/privacy-policy',
        name: 'privacy-policy',
        component: PrivacyPolicy
      }
  
  ]
})
