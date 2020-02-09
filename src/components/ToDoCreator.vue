<template>
   <md-dialog-prompt
      :md-active.sync="isDialogOpen"
      v-model="toDoInput"
      md-title="Add To Do Item"
      md-input-placeholder="Enter To Do Item..."
      md-confirm-text="Add"
      @md-cancel="closeDialog" 
      @md-confirm="createToDo"
    />
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: "ToDoCreator",
  data() {
    return {
      toDoInput: ""
    };
  },
  computed: mapGetters(["isDialogOpen"]),
  methods: {
    ...mapMutations(["closeDialog"]),
    ...mapActions(["postToDoItem"]),
    createToDo() {
      const title = this.toDoInput
      this.toDoInput = ""
      this.postToDoItem({
        title,
        completed: false
      })
    }
  }
};
</script>

<style>
</style>