import { createRouter, createWebHashHistory } from 'vue-router'
import salesRouter from '@/modules/sales/router'

const routes = [
  {
    path: '/',
    ...salesRouter
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/PageNotFound.vue'),
    // redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
