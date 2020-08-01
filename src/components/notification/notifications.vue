<template>
  <transition name="slide">
    <div
      ref="noti"
      v-if="isOpened"
      class="notification"
      :class="[setState(), setPosition()]"
    >
      <span class="message"> {{message}} </span>
      <span class="close" @click="closeNotification">x</span>
    </div>
  </transition>
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

      setTimeout(() =>{
        this.clear();
      }, 2000);
    },

    setPosition() {
      return this.position;
    },

    setState() {
      return this.state;
    },

    clear() {
      this.isOpened = false;
      this.message = '';
      this.state = '';
      this.params = '';
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

  .slide-enter-active {
    animation: slide-in 1s ease-in forwards;
  }

  .slide-leave-active {
    animation: slide-out 1.5s ease-in forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }

    to {
      transform: translateY(0px);
    }
  }


  @keyframes slide-out {
    from {
      transform: translateY(0px);
    }

    to {
      transform: translateY(20px);
    }
  }

</style>