import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import("@/layout/Layout.vue"),
    redirect: "/home",
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import("@/views/Home.vue"),
      },
      {
        path: 'robot',
        name: 'Robot',
        component: () => import("@/views/Robot.vue"),
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import("@/views/Setting.vue"),
      },
      {
        path: 'map',
        name: 'Map',
        component: () => import("@/views/Map.vue"),
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/Login.vue")
  },
]

const router = createRouter({
  history: createWebHistory("/"),
  routes
})

export default router
