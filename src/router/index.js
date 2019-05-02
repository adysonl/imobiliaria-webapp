import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Home from '@/components/home/Home'
import ClientsList from '@/components/client/ClientsList'
import ClientEdit from '@/components/client/ClientEdit'
import PropertyEdit from '@/components/property/PropertyEdit'
import PropertyList from '@/components/property/PropertyList'
import Authentication from '@/components/auth/Authentication'
import SignIn from '@/components/auth/SignIn'
import SignUp from '@/components/auth/SignUp'
import ContractList from '@/components/contracts/ContractList'
import ContractEdit from '@/components/contracts/ContractEdit'

Vue.use(Router)
var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: { name: 'Dash'},
      component: Home,
      children: [
        {
          name: 'Dash',
          path: '/dashboard',
          component: Dashboard
        },
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
          path: 'clientes/editar/:id',
          component: ClientEdit
        },
        {
          path: 'imoveis',
          component: PropertyList
        },
        {
          name: 'PropertyNew',
          path: 'imoveis/novo',
          component: PropertyEdit
        },
        {
          name: 'PropertyEdit',
          path: 'imoveis/editar/:id',
          component: PropertyEdit
        },
        {
          path: 'contratos',
          component: ContractList
        },
        {
          name: 'ContractNew',
          path: 'contratos/novo',
          component: ContractEdit
        },
        {
          path: 'pagamentos',
          component: PaymentList
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
