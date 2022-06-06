import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue'
import menuOne from './modules/menuOne'
import menuTwo from './modules/menuTwo'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',// 默认子路由
        name: 'home',
        component: () => import('../views/home/index.vue')
      },
      ...menuOne,
      ...menuTwo
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router