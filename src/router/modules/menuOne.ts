import { RouteRecordRaw, RouterView } from 'vue-router';

const routes: RouteRecordRaw = {
    path:'/menuOne',
    name: 'menuOne',
    component: RouterView,
    meta: {
      title: '页面一',
      requiresAuth: true 
    },
    children:[
      {
        path: 'one',
        name: 'one',
        component: () => import('@/views/menuOne/one.vue'),
        meta: { // 自定义路由 元数据
          title: 'one'
        }
      },
      {
        path: 'two',
        name: 'two',
        component: () => import('@/views/menuOne/two.vue'),
        meta: { 
          title: 'two'
        }
      },
    ]
  }

export default routes