<template>
  <div class="login">
    <form>
      <div class="form-group">
        <label for="username">USERNAME</label>
        <input name="username" type="text">
      </div>

      <div class="form-group">
        <label for="username">SENHA</label>  
        <input name="password" type="password">
        <div class="error"></div>
      </div>
      <button>entrar</button>
    </form>
  </div>
</template>

<script>
    
</script>

<style>
  .login {
    background: var(--gray);
    width: 300px;
    padding: 23px
  }

  .login input {
    width: 304px;
  }

  .login button {
    width: 308px;
    border: 
  }
  input, button {
    height: 23px;
    font-family: 'Exo';
    font-size: 16px;
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
  button {
    text-transform: uppercase;
    background: var(--med);
    border: none;
    color: #fff;
    border-bottom: 4px solid var(--dark);
    height: 29px;
  }
</style>
