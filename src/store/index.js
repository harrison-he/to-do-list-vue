import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toDoItems: [],
    isDialogOpen: false
  },
  getters: {
    toDoItems: state => state.toDoItems,
    isDialogOpen: state => state.isDialogOpen
  },
  actions: {
    async getToDoItems({ commit }) {
      const toDoItems = (await axios.get("https://jsonplaceholder.typicode.com/todos")).data

      commit("getToDoItems", toDoItems)
    },
    openDialog({ commit }) {
      commit("openDialog")
    } 
  },
  mutations: {
    getToDoItems(state, toDoItems) {
      state.toDoItems = toDoItems
    },
    openDialog(state) {
      state.isDialogOpen = true
    }
  },
  modules: {
  }
})
