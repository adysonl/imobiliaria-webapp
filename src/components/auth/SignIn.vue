<template>
  <div id="login" class="auth login centered">
    <a href="#" title="AeR corretores login"><img src="../../assets/images/login.png" alt="AeR corretores login"/></a>
    <form>
      <div class="form-group">
        <label for="username">USERNAME</label>
        <input v-model="username" id="username" name="username" type="text" required>
      </div>

      <div class="form-group">
        <label for="password">SENHA</label>
        <input v-model="password" id="password" name="password" type="password" required minlength="6">
        <div class="error">{{ error }}</div>
      </div>
      <button @click.prevent="submit($event)" :disabled="!username || !password">entrar</button>
    </form>
    <div class="back-link"><router-link :to="{name: 'Auth'}">← Voltar</router-link></div>
  </div>
</template>

<script>
import UserService from '@/services/user.service'

export default {
  data () {
    return {
      username: '',
      error: '',
      password: '',
      submit: function (event) {
        UserService.login(this.username, this.password).then(response => {
          this.$router.push('/')
        }).catch(e => {
          this.error = e.response.data.error
        }

        )
      }
    }
  }
}
</script>

<style>
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
