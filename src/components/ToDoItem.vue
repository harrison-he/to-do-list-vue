<template>
  <md-list-item>
    {{ title }}
    <md-button class="md-icon-button md-list-action">
      <md-icon>
        check_box
        <md-tooltip md-direction="left">Mark Complete</md-tooltip>
      </md-icon>
    </md-button>
  </md-list-item>
</template>

<script>
export default {
  name: "ToDoItem",
  props: ["title"]
};
</script>

<style>
</style>