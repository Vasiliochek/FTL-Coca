import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/index.vue'

const routes = [
  { path: '/', name: 'index', component: Home },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router