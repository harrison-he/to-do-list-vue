<template>
  <div id="app">
     <div class="overlay" v-if="isLoading">
      <md-progress-spinner md-mode="indeterminate" />
    </div>
    <ErrorDialog />
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from './components/Header'
import ErrorDialog from './components/ErrorDialog'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "App",
  components: {
    Header,
    ErrorDialog
  },
  computed: mapGetters(["isLoading"]),
  methods: mapActions(["getToDoItems"]),
  created() {
    this.getToDoItems();
  }
};
</script>
<style>
.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 2;
}
</style>
