import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainViev from '../views/MainViev.vue'
import FirstViev from '../views/FirstViev.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'FirstViev',
    component: FirstViev
  },
  {
    path: '/main',
    name: 'main',
    component: MainViev
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
