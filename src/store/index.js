import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toDoItems: [],
    completedItems: [],
    isDialogOpen: false
  },
  getters: {
    toDoItems: state => state.toDoItems,
    completedItems: state => state.completedItems,
    isDialogOpen: state => state.isDialogOpen
  },
  actions: {
    async getToDoItems({ commit }) {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos")

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
    getToDoItems(state, items) {
      state.toDoItems = items.filter(({ completed }) => !completed)
      state.completedItems = items.filter(({ completed }) => completed)
    },
    postToDoItem(state, toDoItem) {
      state.toDoItems = [...state.toDoItems, toDoItem]
    }

  },
  modules: {
  }
})
