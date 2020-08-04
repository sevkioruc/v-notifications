import Vue from 'vue';
import notification from './notifications.vue'
import utils from '../../utils'

const n = Vue.extend(notification);

let instance;

export default (message, state, position) => {
  instance = new n();
  instance.vm  = instance.$mount();

  instance.createNotification(message, state, position);
  utils.insertBody(instance.vm.$el);
}
