import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Responsibilities from './views/Responsibilities.vue'

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
    }
  ]
})
