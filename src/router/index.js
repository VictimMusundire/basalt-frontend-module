import { createRouter, createWebHistory } from 'vue-router'
import App from "@/App";

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: App
  },
  {
    path: '/accounts',
    name: 'Account',
    component: () => import('../views/accounts/index')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/accounts/create')
  },
  {
    path: '/debit',
    name: 'Debit',
    component: () => import('../views/accounts/debit')
  },
  {
    path: '/credit',
    name: 'Credit',
    component: () => import('../views/accounts/credit')
  },
  {
    path: '/balance',
    name: 'Balance',
    component: () => import('../views/accounts/balance')
  },
  {
    path: '/transactions',
    name: 'Transaction',
    component: () => import('../views/transactions/index')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
