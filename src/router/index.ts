import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/overview',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '/',
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
    path: '',
    redirect: {name: 'Dashboard'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
