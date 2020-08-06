<template>
  <transition :name="slideType">
    <div
      ref="noti"
      v-if="isOpened"
      class="notification"
      :class="[setState(), setPosition()]"
    >
      <div class="wrapper">
        <span class="message"> {{message}} </span>
        <span class="close" @click="closeNotification">X</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isOpened: null,
      message: '',
      state: '',
      position: '',
      slideType: ''
    }
  },

  methods: {
    createNotification(message, state = 'success', position = 'bottom-right') {
      setTimeout(() => {
        this.changeCoord();
      }, 0);

      this.isOpened = true;
      this.message = message;
      this.state = state;
      this.position = position;

      if (this.position === 'bottom-right') {
        this.slideType = 'slide-right';
      } else if (this.position === 'bottom-left') {
        this.slideType = 'slide-left';
      } else {
        this.slideType = 'slide-center';
      }
    },

    closeNotification() {
      setTimeout(() => {
        this.changeCoord();
      }, 900);
      this.isOpened = false;
    },

    setPosition() {
      return this.position;
    },

    setState() {
      return this.state;
    },

    changeCoord() {
      let notis = document.querySelectorAll('.notification');
      for (let i = 0; i < notis.length; i++) {
        let hx = 10 * i;
        for (var i2 = 0; i2 < i; i2++) {
          hx += notis[i2].clientHeight + 6;
        }
        notis[i].style.transform = `translatey(-${hx}px)`
      }
    }
  }
}
</script>

<style scoped>
  body {
    position: relative;
  }

  .wrapper {
    margin-top: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 240px;
  }
  
  .message {
    font-family: sans-serif;
    color: white;
  }

  .notification {
    position: absolute;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    width: 250px;
    height: 40px;
  }

  .close {
    position: fixed;
    right: 5px;
    margin-right: 5px;
    font-size: 15px;
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

  .bottom-left{
    bottom: 10px;
    left: 20px;
  }

  .bottom-right{
    bottom: 10px;
    right: 20px;
  }

  .bottom-center {
    bottom: 10px;
    margin-left: 50%;
  }

  .slide-right-enter-active {
    animation: slide-right-in 1.0s ease-out forwards;
  }

  .slide-right-leave-active {
    transition: opacity 750ms;
    opacity: 0;
  }

  .slide-left-enter-active {
    animation: slide-left-in 1.0s ease-out forwards;
  }

  .slide-left-leave-active {
    transition: opacity 750ms;
    opacity: 0;
  }

  .slide-cen-enter-active {
    animation: slide-center-in 1.5s ease-out forwards;
  }

  .slide-center-leave-active {
    transition: opacity 750ms;
    opacity: 0;
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(20px);
    }

    to {
      transform: translateX(0px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-20px);
    }

    to {
      transform: translateX(0px);
    }
  }

  @keyframes slide-center-in {
    from {
      transform: translateY(10px);
    }

    to {
      transform: translateY(0px);
    }
  }

</style>