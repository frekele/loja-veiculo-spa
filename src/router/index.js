import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/home/index'
import Anuncio from '@/pages/anuncio/index'
import NotFound from '@/pages/not-found'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/anuncio/:id',
      name: 'anuncio',
      component: Anuncio
    },
    { path: '*', component: NotFound }
  ]
})
