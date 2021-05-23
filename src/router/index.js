import Vue from 'vue'
import VueRouter from 'vue-router'

import EnterView from '@/views/EnterView.vue'
import SignUpView from '@/views/SignUpView.vue'
import SignInView from '@/views/SignInView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'EnterView',
    component: EnterView,
  },
  {
    path: '/sign_up',
    name: 'SignUpView',
    component: SignUpView,
  },
  {
    path: '/sign_in',
    name: 'SignInView',
    component: SignInView,
  },
  {
    path: '*',
    redirect: '/',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
