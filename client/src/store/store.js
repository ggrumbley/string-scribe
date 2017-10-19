import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState(),
  ],
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
  },
  mutations: {
    setToken(state, token) {
      state.token = token; // eslint-disable-line
      if (token) {
        state.isUserLoggedIn = true; // eslint-disable-line
      } else {
        state.isUserLoggedIn = false; // eslint-disable-line
      }
    },
    setUser(state, user) {
      state.user = user; // eslint-disable-line
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    },
  },
});
