<template>
  <button @click="run">Run</button>
</template>

<script>
import noti from './components/notification/index';
import notification from './components/notification/notifications'
export default {
  components: {
    notification
  },
  methods: {
    run() {
      noti();
    }
  }
}
</script>

<style>

</style>
