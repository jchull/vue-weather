import Vue from 'vue'
import Router from 'vue-router'
import QuickZipcodeForecast from '@/views/QuickZipcodeForecast.vue'
import About from '@/views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QuickZipcodeForecast',
      component: QuickZipcodeForecast
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
