<template>
   <md-toolbar>
      <h2 class="md-title">To Do List</h2>
      <nav>
        <md-button id="add-to-do-item" @click="openDialog" >Add To Do Item</md-button>
        <md-button id="to-do-list" to="/" >To Do Items</md-button>
        <md-button id="completed" to="/completed" >Completed</md-button>
      </nav>
   </md-toolbar>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: "Header",
    data() {
      return {
        activeTab: "to-do-list"
      }
    },
    methods: mapMutations(["openDialog"])
}
</script>

<style scoped>
.md-toolbar {
  display: flex;
  justify-content: space-between;
}
</style>