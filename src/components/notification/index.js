import Vue from 'vue';
import notification from './notifications.vue'
import utils from '../../utils'

const n = Vue.extend(notification);

let instance;

export default (params) => {
  instance = new n();
  instance.vm  = instance.$mount();

  instance.createNotification(params);
  utils.insertBody(instance.vm.$el);
}
