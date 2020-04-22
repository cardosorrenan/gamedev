import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Turma from '../views/Turma.vue'
import Participantes from '../views/Participantes.vue'
import Material from '../views/Material.vue'
import Cronograma from '../views/Cronograma.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Home'
    },
    component: Home
  },
  {
    path: '/turma',
    name: 'turma',
    meta: {
      title: 'Turma'
    },
    component: Turma
  },
  {
    path: '/participantes',
    name: 'participantes',
    meta: {
      title: 'Participantes'
    },
    component: Participantes
  },
  {
    path: '/material',
    name: 'material',
    meta: {
      title: 'Material'
    },
    component: Material
  },
  {
    path: '/cronograma',
    name: 'cronograma',
    meta: {
      title: 'Cronograma'
    },
    component: Cronograma
  },
  { 
    path: "*", 
    name: '404 Not Found',
    meta: {
      title: '404 Not Found'
    },
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
