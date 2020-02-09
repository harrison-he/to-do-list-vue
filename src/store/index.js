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
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=15")

      commit("getToDoItems", data)
    },
    async postToDoItem({ commit }, toDoItem) {
      const { data } = await axios.post("https://jsonplaceholder.typicode.com/todos", toDoItem )

      commit("closeDialog")
      commit("postToDoItem", data)
    }
  },
  mutations: {
    openDialog(state) {
      state.isDialogOpen = true
    },
    closeDialog(state) {
      state.isDialogOpen = false
    },
    getToDoItems(state, toDoItems) {
      state.toDoItems = toDoItems
    },
    postToDoItem(state, toDoItem) {
      state.toDoItems = [...state.toDoItems, toDoItem]
    }

  },
  modules: {
  }
})
