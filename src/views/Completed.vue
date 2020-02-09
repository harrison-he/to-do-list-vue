<template>
  <div class="container">
    <h2 class="md-title">Completed</h2>
    <md-list>
      <CompletedItem v-for="({ id, title }) in completedItems" :title="title" :key="id" />
    </md-list>
  </div>
</template>

<script>
import CompletedItem from './../components/CompletedItem'
import { mapGetters } from 'vuex'

export default {
  name: "Completed",
  components: {
    CompletedItem
  },
  computed: mapGetters(["completedItems"])

}
</script>

<style scoped>
.container {
  padding: 0 24px;
}

.md-list {
  border: 1px solid #d9d9d9;
  padding: 0;
  margin: 16px 0;
}

.md-list-item {
  border-bottom: 1px solid #d9d9d9;
}
</style>
