import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
  },
  mutation: {
    setToken(state, token) {
      state.token = token; // eslint-disable-line
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },
  },
});
