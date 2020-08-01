import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Programs from './views/Programs.vue'

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
      }
  ]
})
