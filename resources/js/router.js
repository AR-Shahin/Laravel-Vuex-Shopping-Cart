import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Home from './pages/Home'
import About from './pages/About'
const routes = [
  { path: '/', component: Home,name:'home' },
  { path: '/about', component: About,name:'about' },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
