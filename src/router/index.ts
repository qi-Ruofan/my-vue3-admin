import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import store from '@/store'
import type { StateAll } from '@/store'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
      },
      {
        path: 'router',
        name: 'Router',
        component: () => import(/* webpackChunkName: "router" */ '../views/router.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  const token = (store.state as StateAll).users.token;
  if(to.path === '/login') {
    next()
  } else {
    if(!token) {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
