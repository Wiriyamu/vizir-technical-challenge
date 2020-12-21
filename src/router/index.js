import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () =>
      import(/* webpackChunkName: "sobre" */ '../views/Sobre.vue')
  },
  {
    path: '/fale-mais',
    name: 'Fale Mais',
    component: () =>
      import(/* webpackChunkName: "Fale Mais" */ '../views/FaleMais.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
