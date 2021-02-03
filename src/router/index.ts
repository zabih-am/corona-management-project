import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    redirect: {path:'/overview/confirmed'},
    children: [
      {
        path: '/overview/:type',
        name: 'Overview',
        component: () => import(/* webpackChunkName: "overview" */ '../components/overview/Overview.vue')
      },
      {
        path: '/users',
        name: 'Users',
        component: () => import(/* webpackChunkName: "users" */ '../components/users/Users.vue')
      }
    ]
  },
  {
    path:'/',
    redirect: {path:'/overview' , params: {type: 'confirmed'}}
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "NotFound" */ '../components/shared/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
