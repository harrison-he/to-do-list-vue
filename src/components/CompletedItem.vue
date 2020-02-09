<template>
  <md-list-item>
    {{ title }}
    <md-button class="md-icon-button md-list-action" @click="removeToDoItem">
      <md-icon>
        delete
        <md-tooltip md-direction="left">Delete</md-tooltip>
      </md-icon>
    </md-button>
  </md-list-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "CompletedItem",
  props: ["id", "title"],
  methods: {
    ...mapActions(["deleteToDoItem"]),
    removeToDoItem() {
      this.deleteToDoItem(this.id)
    }
  }
};
</script>

<style>
</style>