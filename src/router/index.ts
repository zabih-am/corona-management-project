import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
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
