<template>
  <div id="login" class="auth login centered">
    <img src="../../assets/login.png"/>
    <form>
      <div class="form-group">
        <label for="username">USERNAME</label>
        <input v-model="username" name="username" type="text" required>
      </div>

      <div class="form-group">
        <label for="username">SENHA</label>
        <input v-model="password" name="password" type="password" required minlength="6">
        <div class="error">{{ error }}</div>
      </div>
      <button @click.prevent="submit($event)" :disabled="!username || !password">entrar</button>
    </form>
    <div class="back-link"><router-link :to="{name: 'Auth'}">← Voltar</router-link></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      username: '',
      error: '',
      password: '',
      submit: function (event) {
        axios.post('http://localhost:3000/auth/login', {login: this.username, password: this.password})
          .then(response => {
            localStorage.setItem('token', response.data.token)
            this.$router.push('/')
          })
          .catch(e => {
            this.error = e.response.data.error
          })
      }
    }
  }
}
</script>

<style>
  .auth {
    background: var(--gray);
    width: 300px;
    padding: 23px
  }

  .auth input {
    width: 100%;
    border: 0px
  }

  .auth button {
    width: 300px;
  }

  .login {
    height: 300px;
  }

  .back-link {
    font-size: 14px;
    font-weight: bold;
    width: 100%;
    text-align: right;
    margin-top: 40px;
  }
</style>
