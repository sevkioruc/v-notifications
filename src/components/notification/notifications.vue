<template>
  <div
    ref="noti"
    v-if="isOpened"
    class="notification"
  >
    <span class="message"> {{message}} </span>
    <span class="close" @click="closeNotification">x</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpened: false,
      message: 'Dummy Message',
    }
  },
  methods: {
    closeNotification() {
      this.isOpened = false;
    },

    createNotification(message) {
      this.isOpened = true;
      this.message = message;
    }

  }
}
</script>

<style scoped>
  body {
    position: relative;
  }
  .notification {
    border: 1px solid #ccc;
    width: 150px;
    height: 30px;
    text-align: center;
    position: absolute;
    bottom: 10px;
  }

  .close {
    cursor: pointer;
  }
</style>