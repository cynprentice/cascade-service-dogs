import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
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
      component: Home,
      meta: {
        title: 'Cascade Service Dogs - Home Page'
      }
    },
      {
        path: '/service-dogs',
        name: 'service-dogs',
        component: ServiceDogs,
        meta: {
          title: 'Cascade Service Dogs - Service Dog Programs'
        }
      },
      {
        path: '/training',
        name: 'training',
        component: Training,
        meta: {
          title: 'Cascade Service Dogs - Training Programs'
        }
      },
      {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
          title: 'Cascade Service Dogs - About'
        }
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact,
        meta: {
          title: 'Contact Cascade Service Dogs'
        }
      },
      {
        path: '/testimonials',
        name: 'testimonials',
        component: Testimonials,
        meta: {
          title: 'Cascade Service Dogs - Testimonials'
        }
      },
      {
        path: '/applications',
        name: 'applications',
        component: Applications,
        meta: {
          title: 'Cascade Service Dogs - Applications'
        }
      },
      {
        path: '/privacy-policy',
        name: 'privacy-policy',
        component: PrivacyPolicy,
        meta: {
          title: 'Cascade Service Dogs - Privacy Policy'
        }
      }
  
  ]

})

