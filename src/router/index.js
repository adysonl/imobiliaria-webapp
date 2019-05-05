import Vue from 'vue'
import Router from 'vue-router'
import { TokenService } from '@/services/storage.service.js'

Vue.use(Router)
var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: { name: 'Dash' },
      component: () => import('@/components/home/Home'),
      children: [
        {
          name: 'Dash',
          path: '/dashboard',
          component: () => import('@/components/Dashboard')

        },
        {
          path: 'clientes',
          component: () => import('@/components/client/ClientList')
        },
        {
          name: 'ClientNew',
          path: 'clientes/novo',
          component: () => import('@/components/client/ClientEdit')
        },
        {
          name: 'ClientEdit',
          path: 'clientes/editar/:id',
          component: () => import('@/components/client/ClientEdit')
        },
        {
          path: 'imoveis',
          component: () => import('@/components/property/PropertyList')
        },
        {
          name: 'PropertyNew',
          path: 'imoveis/novo',
          component: () => import('@/components/property/PropertyEdit')
        },
        {
          name: 'PropertyEdit',
          path: 'imoveis/editar/:id',
          component: () => import('@/components/property/PropertyEdit')
        },
        {
          path: 'contratos',
          component: () => import('@/components/contract/ContractList')
        },
        {
          name: 'ContractNew',
          path: 'contratos/novo',
          component: () => import('@/components/contract/ContractEdit')
        },
        {
          path: 'pagamentos',
          component: () => import('@/components/payment/PaymentList')
        },
        {
          path: 'pagamentos/imprimir',
          component: () => import('@/components/payment/PaymentPrint')
        }
      ]
    },
    {
      path: '/auth',
      name: 'Auth',
      component: () => import('@/components/auth/Authentication'),
      meta: { isPublic: true }
    },
    {
      path: '/auth/signin',
      name: 'SignIn',
      component: () => import('@/components/auth/SignIn'),
      meta: { isPublic: true }
    },
    {
      path: '/auth/signup',
      name: 'SignUp',
      component: () => import('@/components/auth/SignUp'),
      meta: { isPublic: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.isPublic)
  const logged = !!TokenService.getToken()
  if (!isPublic && !logged) {
    next({ name: 'Auth' })
  } else {
    next()
  }
})

export default router
