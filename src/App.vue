<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>Version: {{ version }}</p>
    <p>Enviroment: {{ enviroment }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      msg: 'Hola Mundo!',
      version: '0.2.0A-JC0204',
      enviroment: process.env.NODE_ENV
    }
  }
}
</script>
