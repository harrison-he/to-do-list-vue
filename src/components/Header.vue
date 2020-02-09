<template>
   <md-toolbar>
      <h2 class="md-title">To Do List</h2>
      <nav>
        <md-button to="/" >To Do Items</md-button>
        <md-button to="/completed" >Completed</md-button>
      </nav>
   </md-toolbar>
</template>

<script>
export default {
    name: "Header",
    data() {
      return {
        activeTab: "to-do-list"
      }
    }
}
</script>

<style scoped>
.md-toolbar {
  display: flex;
  justify-content: space-between;
}
</style>