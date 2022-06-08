import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
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
        component: () => import('../views/home/index.vue'),
        meta: {title: '首页'}
      },
      menuOne,
      menuTwo
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

router.beforeEach(() => {
  nprogress.start()
})
router.afterEach(() => {
  nprogress.done()
})

export default router