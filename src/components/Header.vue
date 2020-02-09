<template>
   <md-toolbar>
      <h1 class="md-title">To Do List</h1>
      <nav>
        <md-button id="to-do-list" to="/" >To Do List</md-button>
        <md-button id="completed" to="/completed" >Completed</md-button>
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
    },
    // created() {
    //   this.activeTab = window.location.hash === "#/" ? "to-do-list" : "completed"
    // },
    // methods: {
    //   changeTab(tab) {
    //     this.activeTab = tab
    //   }
    // }
}
</script>

<style scoped>
.md-toolbar {
  display: flex;
  justify-content: space-between;
}
</style>