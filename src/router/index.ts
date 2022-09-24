import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainViev from '../views/MainViev.vue'
import AnswerView from '../views/AnswerView.vue'
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
  },
  {
    path: '/answers',
    name: 'answers',
    component: AnswerView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AnswerView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
