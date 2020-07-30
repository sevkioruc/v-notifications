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
      let params = {};
      params.message = 'FromApp';
      params.state = 'danger';
      params.position = 'bottom-right';
      noti(params);
    }
  }
}
</script>

<style>

</style>
