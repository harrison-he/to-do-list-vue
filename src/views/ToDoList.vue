<template>
 <div>
     
          <input v-model="inputValue"></input>
        <button @click="addTodo">Add</button>
        <ul>
          <li v-for="(toDoItem, i) in toDoItems" :key="i">{{ toDoItem }}</li>
        </ul>
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
