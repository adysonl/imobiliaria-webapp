<template>
  <div id="app">
    <header-menu></header-menu>
    <router-view/>
  </div>
</template>

<script>
import headerMenu from './components/core/HeaderMenu.vue'
export default {
  name: 'App',
  components: {headerMenu}
}
</script>

<style>
:root {
  --dark: #34191d;
  --med: #4d272a;
  --gray: #cbc8bf;
}
body {
    background: url('assets/bg.png');
  margin: 0;
}
#app {
  font-family: 'Exo', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}

</style>
