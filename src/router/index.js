import Vue from 'vue'
import Router from 'vue-router'

import HomeAdm from '@/pages/adm/index'
import Anuncio from '@/pages/adm/anuncio/index'
import AnuncioCadastro from '@/pages/adm/anuncio/form'
import Categoria from '@/pages/adm/categoria/index';
import CategoriaCadastro from '@/pages/adm/categoria/form'
import Opcional from '@/pages/adm/opcional/index';
import OpcionalCadastro from '@/pages/adm/opcional/form'
import Fabricante from '@/pages/adm/fabricante/index';
import FabricanteCadastro from '@/pages/adm/fabricante/form'
import Combustivel from '@/pages/adm/combustivel/index';
import CombustivelCadastro from '@/pages/adm/combustivel/form'
import Veiculo from '@/pages/adm/veiculo/index';
import VeiculoCadastro from '@/pages/adm/veiculo/form'

import NotFound from '@/pages/not-found'
import Login from '@/pages/login'
import Index from '@/pages/index'
import AnuncioPublico from '@/pages/anuncio'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/adm',
      name: 'adm',
      component: HomeAdm,
    },
    {
      path: '/adm/anuncio',
      name: 'adm.anuncio',
      component: Anuncio,
    },
    {
      path: '/adm/anuncio/cadastro',
      name: 'adm.anuncio.cadastro',
      component: AnuncioCadastro,
    },
    {
      path: '/adm/anuncio/editar/:id',
      name: 'adm.anuncio.editar',
      component: AnuncioCadastro,
    },
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
        path: '/adm/veiculo',
        name: 'adm.veiculo',
        component: Veiculo,
    },
    {
        path: '/adm/veiculo/cadastro',
        name: 'adm.veiculo.cadastro',
        component: VeiculoCadastro,
    },
    {
        path: '/adm/veiculo/editar/:id',
        name: 'adm.veiculo.editar',
        component: VeiculoCadastro,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/anuncio/:id',
      name: 'anuncio',
      component: AnuncioPublico,
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

