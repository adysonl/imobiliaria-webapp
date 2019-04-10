<template>
  <div class="auth-page centered">
    <img src="../../assets/images/init-page.png"/>
    <br/>
    <br/>
    <router-link :to="{name: 'SignIn'}"><button> Login </button></router-link>
    <router-link :to="{name: 'SignUp'}"><button> Cadastrar </button></router-link>
    <router-view/>
  </div>
</template>

<script>

</script>

<style>
.auth-page {
  width: 350px;
  height: 450px;
  text-align: center;
}

.auth-page button {
  width: 80%;
  height: 40px;
  margin-bottom: 10px;
  font-weight: 650px;
}

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
</style>
