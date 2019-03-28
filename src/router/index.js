import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Authentication from '@/components/auth/Authentication'
import SignIn from '@/components/auth/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Authentication
    },
    {
      path: '/auth/signin',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
