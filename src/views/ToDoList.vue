<template>
  <div>
    <ToDoCreator />
    <md-list>
      <md-list-item v-for="(toDoItem, i) in toDoItems" :key="i">{{ toDoItem }}</md-list-item>
    </md-list>
  </div>
</template>

<script>
import ToDoCreator from './../components/ToDoCreator'

export default {
  name: "toDoList",
  components: {
    ToDoCreator
  },
  data() {
    return {
      toDoItems: ["Blah"]
    };
  }
};
</script>
