import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import nprogress from 'nprogress'
import { store } from '@/store';
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
        meta: {
          title: '首页',
          requiresAuth: true 
        } 
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

router.beforeEach((to, from) => {
  nprogress.start()
  // if (to.meta.requiresAuth && !store.state.user) {
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    // return {
    //   path: '/login',
    //   // 保存我们所在的位置，以便以后再来
    //   query: { redirect: to.fullPath }
    // }
  // }
})
router.afterEach(() => {
  nprogress.done()
})

export default router