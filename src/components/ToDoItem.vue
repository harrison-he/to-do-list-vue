<template>
  <md-list-item>
    {{ title }}
    <md-button class="md-icon-button md-list-action" @click="markComplete">
      <md-icon>
        check_box
        <md-tooltip md-direction="left">Mark Complete</md-tooltip>
      </md-icon>
    </md-button>
  </md-list-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "ToDoItem",
  props: ["id", "title"],
  methods: {
    ...mapActions(["putToDoItem"]),
    markComplete() {
      const {
        id,
        title
      } = this

      this.putToDoItem({
        id,
        title,
        completed: true
      })
    }
  }
};
</script>

<style>
</style>