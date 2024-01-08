import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/history',
      name: 'history',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/order_historyView.vue')
    },
    {
      path: '/shopping_cart',
      name: 'shopping_cart',


      component: () => import('../views/shopping_cartView.vue')
    },
    {
      path: '/account',
      name: 'account',

      component: () => import('../views/Account_settingsView.vue')
    },
    {
      path:'/cart',
      name: 'cart',

      component: () => import('../views/cartView.vue')
    }
  ]
})

export default router
