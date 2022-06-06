import { RouteRecordRaw, RouterView } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path:'menuTwo',
    name: '',
    component: RouterView,
    children:[
      {
        path: 'one',
        name: 'one',
        component: () => import('../../views/menuTwo/one.vue'),
      },
      {
        path: 'two',
        name: 'two',
        component: () => import('../../views/menuTwo/two.vue'),
      },
    ]
  }
]

export default routes