import Vue from 'vue'

new Vue({
  data: {
    msg: 'Hola Mundo!',
    version: '0.1.0',
    enviroment: process.env.NODE_ENV
  }
}).$mount('#app')
