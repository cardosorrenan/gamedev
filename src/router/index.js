import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Home'
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/turma',
    name: 'turma',
    meta: {
      title: 'Turma'
    },
    component: () => import('../views/Turma.vue')
  },
  {
    path: '/participantes',
    name: 'participantes',
    meta: {
      title: 'Participantes'
    },
    component: () => import('../views/Participantes.vue')
  },
  {
    path: '/material',
    name: 'material',
    meta: {
      title: 'Material'
    },
    component: () => import('../views/Material.vue')
  },
  {
    path: '/cronograma',
    name: 'cronograma',
    meta: {
      title: 'Cronograma'
    },
    component: () => import('../views/Cronograma.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
