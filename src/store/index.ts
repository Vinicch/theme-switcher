import { createStore } from 'vuex'

const store = createStore({
  state: {
    darkTheme: false,
  },
  getters: {
    isDarkTheme: state => state.darkTheme,
  },
  mutations: {
    toggleTheme: state => {
      state.darkTheme = !state.darkTheme
    },
  },
})

export default store
