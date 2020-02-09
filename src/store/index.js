import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toDoItems: []
  },
  getters: {
    toDoItems: state => state.toDoItems
  },
  actions: {
    async getToDoItems({ commit }) {
      const toDoItems = (await axios.get("https://jsonplaceholder.typicode.com/todos")).data

      commit("retrieveToDoItems", toDoItems)
    }
  },
  mutations: {
    retrieveToDoItems(state, toDoItems) {
      state.toDoItems = toDoItems
    }
  },
  modules: {
  }
})
