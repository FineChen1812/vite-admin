import { RouteRecordRaw, RouterView } from 'vue-router';

const routes: RouteRecordRaw = {
    path:'/menuTwo',
    name: 'menuTwo',
    meta: {
      title: 'menuTwo'
    },
    component: RouterView,
    children:[
      {
        path: 'one',
        name: 'twoOne',
        component: () => import('@/views/menuTwo/one.vue'),
        meta: {
          title: 'one',
          requiresAuth: true 
        }
      },
      {
        path: 'two',
        name: 'twoTwo',
        component: () => import('@/views/menuTwo/two.vue'),
        meta: {
          title: 'two'
        }
      },
    ]
  }

export default routes