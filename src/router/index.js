import { createMemoryHistory, createRouter } from 'vue-router'

import Login from '../Views/Login.vue'
import Register from '@/Views/Register.vue'
import HomeView from '@/Views/HomeView.vue'
const routes = [
  { path: '/', component: Login },
  { path: '/register', component: Register },
  { path: '/homeview', component: HomeView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
