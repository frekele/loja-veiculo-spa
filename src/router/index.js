import Vue from 'vue'
import Router from 'vue-router'

import HomeAdm from '@/pages/adm/index'
import Anuncio from '@/pages/adm/anuncio/index'
import Categoria from '@/pages/adm/categoria/index';
import CategoriaCadastro from '@/pages/adm/categoria/form'
import Opcional from '@/pages/adm/opcional/index';
import OpcionalCadastro from '@/pages/adm/opcional/form'
import Fabricante from '@/pages/adm/fabricante/index';
import FabricanteCadastro from '@/pages/adm/fabricante/form'
import Combustivel from '@/pages/adm/combustivel/index';
import CombustivelCadastro from '@/pages/adm/combustivel/form'

import NotFound from '@/pages/not-found'
import Login from '@/pages/login'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/adm',
      name: 'adm',
      component: HomeAdm,
    },
    // {
    //   path: '/adm/anuncio',
    //   name: 'adm.anuncio',
    //   component: Anuncio,
    // },
    // {
    //   path: '/adm/anuncio/:id',
    //   name: 'anuncio',
    //   component: Anuncio
    // },
    {
      path: '/adm/categoria',
      name: 'adm.categoria',
      component: Categoria,
    },
    {
      path: '/adm/categoria/cadastro',
      name: 'adm.categoria.cadastro',
      component: CategoriaCadastro,
    },
    {
      path: '/adm/categoria/editar/:id',
      name: 'adm.categoria.editar',
      component: CategoriaCadastro,
    },
    {
      path: '/adm/opcional',
      name: 'adm.opcional',
      component: Opcional,
    },
    {
      path: '/adm/opcional/cadastro',
      name: 'adm.opcional.cadastro',
      component: OpcionalCadastro,
    },
    {
      path: '/adm/opcional/editar/:id',
      name: 'adm.opcional.editar',
      component: OpcionalCadastro,
    },
    {
      path: '/adm/fabricante',
      name: 'adm.fabricante',
      component: Fabricante,
    },
    {
      path: '/adm/fabricante/cadastro',
      name: 'adm.fabricante.cadastro',
      component: FabricanteCadastro,
    },
    {
      path: '/adm/fabricante/editar/:id',
      name: 'adm.fabricante.editar',
      component: FabricanteCadastro,
    },
    {
      path: '/adm/combustivel',
      name: 'adm.combustivel',
      component: Combustivel,
    },
    {
      path: '/adm/combustivel/cadastro',
      name: 'adm.combustivel.cadastro',
      component: CombustivelCadastro,
    },
    {
      path: '/adm/combustivel/editar/:id',
      name: 'adm.combustivel.editar',
      component: CombustivelCadastro,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    { path: '*', component: NotFound }
  ]
});

router.beforeEach((to, from, next) => {

  let re = new RegExp("\/adm");

  if (re.test(to.fullPath)) {
    if (sessionStorage.getItem('usuario') === null) {
      next({ name: 'login' });
    }
  }

  next();
});

export default router;

