import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/index'
import Anuncio from '@/pages/anuncio/index'
import NotFound from '@/pages/not-found'
import Login from '@/pages/login'

Vue.use(Router);

const router = new Router({
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
      path: '/adm/anuncio/:id',
      name: 'anuncio',
      component: Anuncio
    },
    { path: '*', component: NotFound }
  ]
});

router.beforeEach((to, from, next) => {

  let re = new RegExp("\/adm");

  if (re.test(to.fullPath)) {

  } else if (to.fullPath === '/login') {

  }


  // if (to.fullPath === '/users') {
  //   if (!store.state.accessToken) {
  //     next('/login');
  //   }
  // }
  // if (to.fullPath === '/login') {
  //   if (store.state.accessToken) {
  //     next('/users');
  //   }
  // }
  // console.log((to.fullPath.));
  next();
});

export default router;

