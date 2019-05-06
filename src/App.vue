<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  :root {
    --dark: #34191d;
    --med: #4d272a;
    --gray: #cbc8bf;
    --white: #ffffff;
  }
  h1 {
    font-size: 26px;
    color: var(--med);
    font-weight: bold;
    text-transform: uppercase;
  }
  .centered {
    position:absolute;
    left:0; right:0;
    top:0; bottom:0;
    margin:auto;
  }

  body {
    background: url('assets/images/bg.png');
    width: 100vw;
    margin: 0;
  }
  @font-face {
    font-family: 'Exo';
    src: url('./assets/fonts/Exo-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

  #app {
    font-family: 'Exo', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0px;
    width: 100vw;
    padding: 0;
  }

  input, button, select {
    height: 23px;
    font-family: 'Exo';
    font-size: 16px;
  }
  select {
    height: 29px;
  }
  label {
    font-size: 80%;
    margin-top: 10px;
    font-weight: 550;
  }

  button {
    text-transform: uppercase;
    background: var(--med);
    border: none;
    color: #fff;
    border-bottom: 4px solid var(--dark);
    height: 36px;
    cursor: pointer;
  }

  button:active {
    border-bottom: none;
  }

  button:disabled {
    background: var(--med);
    opacity: .5;
    cursor: default;
  }
  .form-group {
    margin-bottom: 10px;
    text-align: left;
  }

  .form-group .error{
    font-size: 13px;
    color: #ff0000;
    height: 13px;
  }
</style>
