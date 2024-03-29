// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios/index";
import Vuex from 'vuex'
import VueFlashMessage from 'vue-flash-message';

Vue.use(Vuex);
Vue.use(VueFlashMessage);
Vue.config.productionTip = false;
Vue.prototype.baseUrlAPI = 'http://localhost:1234/api/';
Vue.prototype.axios = axios;

Vue.prototype.formatMoeda = function (v) {
  v =  parseFloat(v);
  return v.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
};

var store = {
  state: {
    usuario: null,
  },
  getters: {
    getUsuario: state => {

      if (sessionStorage.getItem('usuario') !== null) {
        state.usuario = JSON.parse(sessionStorage.getItem('usuario'));
      }

      return state.usuario;
    },
  },
  mutations: {
    setUsuario(state, usuario) {
      sessionStorage.setItem('usuario', usuario);
      state.usuario = usuario;
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
