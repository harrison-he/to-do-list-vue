<template>
   <md-dialog-prompt
      :md-active.sync="isDialogOpen"
      v-model="toDoInput"
      md-title="Add To Do Item"
      md-input-placeholder="Enter To Do Item..."
      md-confirm-text="Add" 
    />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "ToDoCreator",
  data() {
    return {
      toDoInput: ""
    };
  },
  computed: mapGetters(["isDialogOpen"])
};
</script>

<style>
</style>