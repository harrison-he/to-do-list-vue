<template>
  <div>
    <md-field>
      <label>Add To Do Item</label>
      <md-input v-model="inputValue" />
    </md-field>
    <md-button @click="addTodo">Add</md-button>
    <md-list>
      <md-list-item v-for="(toDoItem, i) in toDoItems" :key="i">{{ toDoItem }}</md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: "toDoList",
  components: {},
  data() {
    return {
      inputValue: "",
      toDoItems: ["Blah"]
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
