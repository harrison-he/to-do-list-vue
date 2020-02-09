<template>
  <div>
    <md-field>
      <label>Add To Do Item</label>
      <md-input v-model="inputValue" />
    </md-field>
    <md-button @click="addTodo">Add</md-button>
  </div>
</template>

<script>
export default {
  name: "ToDoCreator",
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    addTodo() {
      this.toDoItems = [...this.toDoItems, this.inputValue];
      this.inputValue = "";
    }
  }
};
</script>

<style>
</style>