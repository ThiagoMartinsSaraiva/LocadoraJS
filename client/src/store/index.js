import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      token: localStorage.getItem('@locadora/token') || '',
      user: {},
    }
  },
  mutations: {
    login(state,{ token, user}) {
      state.token = token
      state.user = user
    },
    logout(state) {
      state.token = ''
    }
  },
  actions: {
    login({ commit }, user) {
      const token = ''

      commit('login', { token, user })
    },
    logout({ commit }) {
      commit('logout')
    }
  },
  modules: {},
  getters: {
    isLoggedIn: state => !!state.token,
  },
});
