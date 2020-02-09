<template>
  <div>
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
