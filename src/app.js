import Vue from 'vue/dist/vue.esm.browser'

new Vue({
  data: {
    msg: 'Hola Mundo!',
    version: '0.2.0A-JC0202',
    enviroment: process.env.NODE_ENV
  }
}).$mount('#app')
