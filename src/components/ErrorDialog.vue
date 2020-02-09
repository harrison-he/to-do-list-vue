<template>
  <md-dialog-alert
      :md-active.sync="isErrorDialogOpen"
      md-title="Error"
      md-content="A problem occured."
      />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    name: "ErrorDialog",
    computed: {
        isErrorDialogOpen: {
            get: mapGetters(["isErrorDialogOpen"]).isErrorDialogOpen,
            set: mapMutations(["closeErrorDialog"]).closeErrorDialog
        }
        
    }
}
</script>

<style>

</style>