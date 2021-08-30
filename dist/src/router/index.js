import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Photoshop from '../views/Photoshop.vue'
import Illustrator from '../views/Illustrator.vue'
import Model from '../views/3D.vue'
import ui from '../views/UI.vue'
import Three from '../views/Three.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ui',
    name: 'ui',
    component: ui
  },
  {
    path: '/photoshop',
    name: 'Photoshop',
    component: Photoshop
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/illustrator',
    name: 'Illustrator',
    component: Illustrator
  },
  {
    path: '/model',
    name: 'Model',
    component: Model
  },
  {
    path: '/three',
    name: 'Three',
    component: Three
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
