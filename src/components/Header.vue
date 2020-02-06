<template>
   <md-toolbar>
      <h1 class="md-title">To Do List</h1>
      <md-tabs md-sync-route>
        <md-tab id="to-do-list" md-label="To Do List" to="/" />
        <md-tab id="completed" md-label="Completed" to="/completed" />
      </md-tabs>
   </md-toolbar>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
.md-toolbar {
  display: flex;
  justify-content: space-between;
}
</style>