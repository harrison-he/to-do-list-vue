<template>
  <div class="container">
    <div class="top-row">
      <h1 class="md-headline">To Do Items</h1>
      <md-button class="md-raised" @click="openDialog" >Add To Do Item</md-button>
    </div>
    <ToDoCreator />
    <md-list>
      <ToDoItem v-for="({ id, title }) in toDoItems" :key="id" :title="title" />
    </md-list>
  </div>
</template>

<script>
import ToDoCreator from './../components/ToDoCreator'
import ToDoItem from './../components/ToDoItem'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: "toDoList",
  components: {
    ToDoCreator,
    ToDoItem
  },
  computed: mapGetters(["toDoItems"]),
  methods: {
    ...mapActions(["getToDoItems"]),
    ...mapMutations(["openDialog"])
  },
  created() {
    this.getToDoItems()
  }
};
</script>

<style scoped>
.container {
  padding: 0 16px 0 24px;
}

.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.md-list {
  border: 1px solid #d9d9d9;
  padding: 0;
  margin-bottom: 16px;
}

.md-list-item {
  border-bottom: 1px solid #d9d9d9;
}

.md-button {
  margin-right: 0px;
}
</style>