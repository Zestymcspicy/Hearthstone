import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Responsibilities from './views/Responsibilities.vue'
import Contact from './views/Contact.vue'
import Applications from './views/Applications.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/responsibilities',
      name: 'responsibilities',
      component: Responsibilities
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/applications',
      name: 'applications',
      component: Applications
    }
  ]
})
