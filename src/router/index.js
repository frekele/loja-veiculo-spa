import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/index'
import Anuncio from '@/pages/anuncio/index'
import NotFound from '@/pages/not-found'
import Login from '@/pages/login'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/adm',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/anuncio/:id',
      name: 'anuncio',
      component: Anuncio
    },
    { path: '*', component: NotFound }
  ]
})
