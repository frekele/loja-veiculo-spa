// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios/index";
import Vuex from 'vuex'

Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.prototype.baseUrlAPI = 'http://localhost:1234/api/';
Vue.prototype.axios = axios;
Vue.prototype.formatMoeda = function (v) {
  v =  parseFloat(v);
  return v.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
};

var store = {
  state: {
    selecionados: {},
    anuncios: []
  },
  getters: {
    getSelecionados: state => { return state.selecionados },
    getAnuncios: state => { return state.anuncios },
  },
  mutations: {
    setSelecionados(state, selecionado) {
      state.selecionados = selecionado;
    },
    addAnuncio(state, anuncio) {
      state.anuncios.push(anuncio);
    },
  }
};


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: new Vuex.Store(store),
  router,
  components: { App },
  template: '<App/>'
});
