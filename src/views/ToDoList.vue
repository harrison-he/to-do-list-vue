<template>
  <div class="container">
    <h1 class="md-headline">To Do Items</h1>
    <ToDoCreator />
    <md-list>
      <ToDoItem v-for="({ id, title }) in toDoItems" :key="id" :title="title" />
    </md-list>
  </div>
</template>

<script>
import ToDoCreator from './../components/ToDoCreator'
import ToDoItem from './../components/ToDoItem'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "toDoList",
  components: {
    ToDoCreator,
    ToDoItem
  },
  computed: mapGetters(["toDoItems"]),
  methods: mapActions(["getToDoItems"]),
  created() {
    this.getToDoItems()
  }
};
</script>

<style scoped>
.container {
  padding: 0 24px;
}

.md-list {
  border: 1px solid #d9d9d9;
  padding: 0;
  margin: 16px 0;
}

.md-list-item {
  border-bottom: 1px solid #d9d9d9;
}
</style>