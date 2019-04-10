<template>
  <nav>
    <div class="logo">
      <router-link :to="{name: 'Home'}"><img src="../../assets/images/header-logo.png" /></router-link>
      <button class="logout-btn" @click.prevent="logout()">
        sair
      </button>
    </div>

      <ul class="menu">
        <li v-for="item in items" :key="item.index">
          <router-link :to="item.url">{{ item.title }}</router-link>
        </li>
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
  },
  methods: {
    logout: function () {
      localStorage.removeItem('token')
      this.$router.push({name: 'Auth'})
    }
  }
}
</script>

<template>
  <nav>
    <div class="logo">
      <router-link :to="{name: 'Home'}"><img src="../../assets/images/header-logo.png" /></router-link>
      <button class="logout-btn" @click.prevent="logout()">
        sair
      </button>
    </div>

      <ul class="menu">
        <li v-for="item in items" :key="item.index">
          <router-link :to="item.url">{{ item.title }}</router-link>
        </li>
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
  },
  methods: {
    logout: function () {
      localStorage.removeItem('token')
      this.$router.push({name: 'Auth'})
    }
  }
}
</script>

<style>
  .logo {
    height: 60px;
    padding: 10px;
    background: linear-gradient(to right, var(--dark) 0%,var(--med) 100%);
    text-align: end;
  }
  .menu{
    background: var(--dark);
    color: #fff;
    margin-top: 0;
    padding: 10px;
    text-transform: uppercase;
    font-weight: 550;
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
  .menu li:hover {
    background: linear-gradient(to bottom, var(--dark) 0%, var(--med) 100%, transparent);
    background-size: 4px 50px;
  }
  .logout-btn {
    border-radius: 400px;
    width: 60px;
    height: 60px;
    background: var(--med);
    color: var(--gray);
    font-weight: 600;
    font-size: 14px;
    border: none;
    margin-right: 10px;
  }

  .logout-btn:hover {
    color: var(--white);
  }

  .logo img {
    position:absolute;
    left:0; right:0;
    margin:auto;
  }
  a, a:visited, a:hover, a:active {
  color: inherit;
  text-decoration: inherit;
}
</style>
