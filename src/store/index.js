import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toDoItems: [],
    completedItems: [],
    isDialogOpen: false,
    isLoading: false,
    isErrorDialogOpen: false
  },
  getters: {
    toDoItems: state => state.toDoItems,
    completedItems: state => state.completedItems,
    isDialogOpen: state => state.isDialogOpen,
    isLoading: state => state.isLoading,
    isErrorDialogOpen: state => state.isErrorDialogOpen
  },
  actions: {
    async getToDoItems({ commit }) {
      commit("startLoading")

      try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos")

        commit("getToDoItems", data)
        commit("finishLoading")
      } catch (err) {
        commit("finishLoading")
        commit("openErrorDialog")
      }
    },
    async postToDoItem({ commit }, toDoItem) {
      commit("startLoading")

      try {
        const { data } = await axios.post("https://jsonplaceholder.typicode.com/todos", toDoItem)

        commit("closeDialog")
        commit("postToDoItem", data)
        commit("finishLoading")
      } catch (err) {
        commit("finishLoading")
        commit("openErrorDialog")
      }
    },
    async putToDoItem({ commit }, { id, ...updatedToDoItem }) {
      commit("startLoading")

      try {
        const { data } = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, updatedToDoItem)

        commit("putToDoItem", data)
        commit("finishLoading")
      } catch (err) {
        commit("finishLoading")
        commit("openErrorDialog")
      }
    },
    async deleteToDoItem({ commit }, id) {
      commit("startLoading")

      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

        commit("deleteToDoItem", id)
        commit("finishLoading")
      } catch (err) {
        commit("finishLoading")
        commit("openErrorDialog")
      }
    }
  },
  mutations: {
    openDialog(state) {
      state.isDialogOpen = true
    },
    closeDialog(state) {
      state.isDialogOpen = false
    },
    openErrorDialog(state) {
      state.isErrorDialogOpen = true
    },
    closeErrorDialog(state) {
      state.isErrorDialogOpen = false
    },
    startLoading(state) {
      state.isLoading = true
    },
    finishLoading(state) {
      state.isLoading = false
    },
    getToDoItems(state, items) {
      state.toDoItems = items.filter(({ completed }) => !completed)
      state.completedItems = items.filter(({ completed }) => completed)
    },
    postToDoItem(state, toDoItem) {
      state.toDoItems = [...state.toDoItems, toDoItem]
    },
    putToDoItem(state, updatedToDoItem) {
      state.toDoItems = state.toDoItems.filter(toDoItem => toDoItem.id !== updatedToDoItem.id)
      state.completedItems = [...state.completedItems, updatedToDoItem]
    },
    deleteToDoItem(state, id) {
      state.completedItems = state.completedItems.filter(item => item.id !== id)
    }

  },
  modules: {
  }
})
