import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/index'
import Anuncio from '@/pages/anuncio/index'
import Opcional from '@/pages/opcional/index'
import OpcionalCadastro from '@/pages/opcional/form'
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
      path: '/adm/anuncio',
      name: 'anuncio',
      component: Anuncio,
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
    {
      path: '/adm/opcional',
      name: 'opcional',
      component: Opcional,
    },
    {
      path: '/adm/opcional/cadastro',
      name: 'opcional/cadastro',
      component: OpcionalCadastro,
    },
    {
      path: '/adm/opcional/editar/:id',
      name: 'opcional/editar',
      component: OpcionalCadastro,
    },
    { path: '*', component: NotFound }
  ]
});

router.beforeEach((to, from, next) => {

  let re = new RegExp("\/adm");

  if (re.test(to.fullPath)) {

    if (sessionStorage.getItem('usuario') === null) {
      next({ name: 'login' });
    } else {
      next();
    }

  } else {
      next();
  }
});

export default router;

