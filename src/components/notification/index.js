import Vue from 'vue';
import notification from './notifications.vue'
import utils from '../../utils'

const n = Vue.extend(notification);

let instance;

export default () => {  
  instance = new n();
  instance.vm  = instance.$mount();

  instance.createNotification('Deneme');
  utils.insertBody(instance.vm.$el);
}
