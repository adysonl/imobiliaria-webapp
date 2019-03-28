<template>
  <nav>
    <div class="logo">
      <img src="../../assets/header-logo.png" height="60px">
    </div>

      <ul class="menu">
        <li v-for="item in items"><router-link v-bind:to="item.url">{{ item.title }}</router-link></li>
      </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderMenu',
  data () {
    return {
      items: [
        {title: 'início', url: '/'},
        {title: 'clientes', url: '/clientes'},
        {title: 'imóveis', url: '/imoveis'},
        {title: 'contratos', url: '/contratos'},
        {title: 'pagamentos', url: '/pagamentos'}
      ]
    }
  }
}
</script>

<style>
  .logo {
    height: 60px;
    padding: 10px;
    background: linear-gradient(to right, var(--dark) 0%,var(--med) 100%);
  }
  .menu{
    background: var(--dark);
    color: #fff;
    margin-top: 0;
    padding: 10px;
    text-transform: uppercase
  }
  .menu li {
    list-style-type: none;
    display: inline;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background-size: 4px 4px;
    background-position: 0 100%;
    transition: background-size .5s;
  }
  .menu li:hover{
    background: linear-gradient(to bottom, var(--dark) 0%, var(--med) 100%, transparent);
    background-size: 4px 50px;

  }

  a, a:visited, a:hover, a:active {
  color: inherit;
  text-decoration: inherit;
}
</style>
