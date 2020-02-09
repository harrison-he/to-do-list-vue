<template>
  <md-list-item>
    {{ title }}
    <md-button class="md-icon-button md-list-action">
      <md-icon>
        delete
        <md-tooltip md-direction="left">Delete</md-tooltip>
      </md-icon>
    </md-button>
  </md-list-item>
</template>

<script>
export default {
  name: "CompletedItem",
  props: ["title"]
};
</script>

<style>
</style>