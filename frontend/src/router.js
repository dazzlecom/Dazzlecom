import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/callservice',
    //   name: 'Service',
    //   component: Service
    // },
    // {
    //   path: '/bootstrap',
    //   name: 'Bootstrap',
    //   component: Bootstrap
    // },
    // {
    //   path: '/user',
    //   name: 'User',
    //   component: User
    // }
  ]
})
