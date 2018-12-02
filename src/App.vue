<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>Version: {{ version }}</p>
    <p>Enviroment: {{ enviroment }}</p>
    <p>💻 with 💜 by <a href="http://twitter.com/jackcres_">JackCres</a></p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      msg: 'Hola Mundo!',
      version: '0.2.0A-JC0206',
      enviroment: process.env.NODE_ENV
    }
  }
}
</script>
