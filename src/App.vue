<template>
  <div id="app">
    <md-app>
      <md-app-toolbar>
        <h1>To Do List</h1>
        <!-- <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>-->
      </md-app-toolbar>

      <!-- <router-view /> -->
      <md-app-content>
        <md-field>
          <md-input v-model="inputValue"></md-input>
        </md-field>
        <md-button @click="addTodo">Add</md-button>
        <md-list>
          <md-list-item v-for="(toDoItem, i) in toDoItems" :key="i">{{ toDoItem }}</md-list-item>
        </md-list>
      </md-app-content>
    </md-app>
  </div>
</template>
<script>
export default {
  name: "App",
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
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
}
</style>
