import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Vuelidate from 'vuelidate'
// Vue.use(Vuelidate)

// Vee validate
import { ValidationProvider, extend, configure } from 'vee-validate';
import { required, email, numeric, min} from 'vee-validate/dist/rules';

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

extend('required', {
  ...required,
  message: 'Este campo es requerido'
});

extend('email', {
  ...email,
  message: 'Debe proporcionar un email válido'
});

extend('numeric', {
  ...numeric,
  message: 'Debe ingresar un número válido'
});

extend('min', {
  ...min,
  message: 'Debe ingresar mínimo 8 números'
});

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')