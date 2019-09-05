import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
  },
  mutations: {
    onOff(state) {
      state.drawer = !state.drawer;
    },
    setDrawer(state, option) {
      state.drawer = option;
    }
  },
  actions: {
    onOff({commit}) {
      commit('onOff');
    },
    setDrawer({commit}) {
      commit('setDrawer');
    }
  },
});
