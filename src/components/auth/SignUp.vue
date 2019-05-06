<template>
  <div id="login" class="auth signup centered">
    <a href="#" title="AeR corretores Cadastro"><img src="../../assets/images/login.png" alt="AeR corretores cadastro"/></a>
    <form>
      <div class="form-group">
        <label for="name">NOME</label>
        <input v-model="user.name" id="name" name="name" type="text" required>
      </div>

      <div class="form-group">
        <label for="email">EMAIL</label>
        <input v-model="user.email" id="email" name="email" type="email" required>
      </div>

      <div class="form-group">
        <label for="username">USERNAME</label>
        <input v-model="user.login" id="username" name="username" type="text" required>
      </div>

      <div class="form-group">
        <label for="password">SENHA</label>
        <input v-model="user.password" id="password" name="password" type="password" required minlength="6">
        <div class="error">{{ error }}</div>
      </div>

      <button type="submit" @click.prevent="submit($event)"
      :disabled="!user.login || !user.password || !user.email || !user.name">
        cadastrar
      </button>
    </form>
    <div class="back-link"><router-link :to="{name: 'Auth'}">← Voltar</router-link></div>
  </div>
</template>

<script>
import UserService from '@/services/user.service'

export default {
  data () {
    return {
      user: {
        name: '',
        email: '',
        login: '',
        password: ''
      },
      error: '',
      submit: function (event) {
        UserService.signup(this.user)
          .then(response => {
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
.signup {
  height: 410px
}
</style>
