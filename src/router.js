import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Programs from './views/Programs.vue'
import ServiceDogs from './views/ServiceDogs.vue'
import Training from './views/Training.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
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
      }
  ]
})
