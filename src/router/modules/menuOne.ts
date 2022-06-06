import { RouteRecordRaw, RouterView } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path:'menuOne',
    name: '',
    component: RouterView,
    children:[
      {
        path: 'one',
        name: 'one',
        component: () => import('../../views/menuOne/one.vue'),
      },
      {
        path: 'two',
        name: 'two',
        component: () => import('../../views/menuOne/two.vue'),
      },
    ]
  }
]

export default routes