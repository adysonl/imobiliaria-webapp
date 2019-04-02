import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/Home'
import ClientsList from '@/components/client/ClientsList'
import ClientEdit from '@/components/client/ClientEdit'
import Authentication from '@/components/auth/Authentication'
import SignIn from '@/components/auth/SignIn'
import SignUp from '@/components/auth/SignUp'

Vue.use(Router)
var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'clientes',
          component: ClientsList
        },
        {
          name: 'ClientNew',
          path: 'clientes/novo',
          component: ClientEdit
        },
        {
          name: 'ClientEdit',
          path: 'clientes/edit/:id',
          component: ClientEdit
        },
        {
          path: 'imoveis',
          component: HelloWorld
        },
        {
          path: 'contratos',
          component: HelloWorld
        },
        {
          path: 'pagamentos',
          component: HelloWorld
        }
      ]
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
    },
    {
      path: '/auth/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
export default router
