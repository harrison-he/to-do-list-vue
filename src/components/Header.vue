<template>
   <md-toolbar>
      <h1 class="md-title">To Do List</h1>
      <nav>
        <md-button id="add-to-do-item" @click="openDialog" >Add To Do Item</md-button>
        <md-button id="to-do-list" to="/" >To Do List</md-button>
        <md-button id="completed" to="/completed" >Completed</md-button>
      </nav>
   </md-toolbar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "Header",
    data() {
      return {
        activeTab: "to-do-list"
      }
    },
    methods: mapActions(["openDialog"])
}
</script>

<style scoped>
.md-toolbar {
  display: flex;
  justify-content: space-between;
}
</style>