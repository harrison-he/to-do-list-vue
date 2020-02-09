<template>
  <div class="container">
    <ToDoCreator />
    <md-list>
      <md-list-item v-for="({ id, title }) in toDoItems" :key="id">{{ title }}</md-list-item>
    </md-list>
  </div>
</template>

<script>
import ToDoCreator from './../components/ToDoCreator'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "toDoList",
  components: {
    ToDoCreator
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
  margin-top: 16px;
}

.md-list-item {
  border-bottom: 1px solid #d9d9d9;
}
</style>