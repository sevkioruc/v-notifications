<template>
  <div
    ref="noti"
    v-if="isOpened"
    class="notification"
    :class="[setState(), setPosition()]"
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
      message: '',
      state: '',
      position: ''
    }
  },
  methods: {
    closeNotification() {
      this.isOpened = false;
    },

    createNotification(params) {
      this.isOpened = true;
      this.message = params.message;
      this.state = params.state;
      this.params = params.position;
    },

    setPosition() {
      return this.position;
    },

    setState() {
      return this.state;
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

  .success {
    background-color: #28a745;
  }

  .danger {
    background-color: #dc3545;
  }
  
  .warning {
    background-color: #ffc107;
  }

  .bottom-left {
    bottom: 10px;
    left: 10px;
  }

  .bottom-right {
    bottom: 10px;
    right: 10px;
  }

  .bottom-middle {
    bottom: 10px;
    margin-left: calc(50% - 150px);
  }
</style>