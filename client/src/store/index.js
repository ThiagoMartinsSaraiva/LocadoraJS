import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      token: JSON.parse(localStorage.getItem('@locadora/token')) || null,
      user: JSON.parse(localStorage.getItem('@locadora/user')) || {
        id: null,
        username: null,
      },
    }
  },
  mutations: {
    login(state,{ token, user }) {
      state.token = token
      state.user = user
      localStorage.setItem('@locadora/user', JSON.stringify(state.user))
    },
    logout(state) {
      localStorage.removeItem('@locadora/user')
      localStorage.removeItem('@locadora/token')

      state.token = ''
      state.user = {
        id: null,
        username: null,
      }
    },
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
  getters: {
    isLoggedIn: state => !!state.user.username,
  },
});
