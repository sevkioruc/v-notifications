<template>
  <transition :name="slideType">
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
      position: '',
      slideType: ''
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
      this.position = params.position;

      if (params.position === 'bottom-right') {
        this.slideType = 'slide-right';
      } else if (params.position === 'bottom-left') {
        this.slideType = 'slide-left';
      } else {
        this.slideType = 'slide-middle';
      }

      setTimeout(() => {
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
      this.slideType = '';
    }
  }
}
</script>

<style scoped>
  body {
    position: relative;
  }

  .notification {
    position: absolute;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    width: 150px;
    height: 30px;
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
    left: 50px;
  }

  .bottom-right {
    bottom: 10px;
    right: 50px;
  }

  .bottom-middle {
    bottom: 10px;
    margin-left: 50%
  }

  .slide-right-enter-active {
    animation: slide-right-in 1.5s ease-out forwards;
  }

  .slide-right-leave-active {
    animation: slide-right-out 1.5s ease-out forwards;
  }

  .slide-left-enter-active {
    animation: slide-left-in 1.5s ease-out forwards;
  }

  .slide-left-leave-active {
    animation: slide-left-out 1.5s ease-out forwards;
  }

  .slide-middle-enter-active {
    animation: slide-middle-in 1.5s ease-out forwards;
  }

  .slide-middle-leave-active {
    animation: slide-middle-out 1.5s ease-out forwards;
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(50px);
    }

    to {
      transform: translateX(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
    }

    to {
      transform: translateX(50px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-100px);
    }

    to {
      transform: translateX(0px);
    }
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
    }

    to {
      transform: translateX(-50px);
    }
  }

  @keyframes slide-middle-in {
    from {
      transform: translateY(10px);
    }

    to {
      transform: translateY(0px);
    }
  }

  @keyframes slide-middle-out {
    from {
      transform: translateY(0px);
    }

    to {
      transform: translateY(10px);
    }
  }

</style>