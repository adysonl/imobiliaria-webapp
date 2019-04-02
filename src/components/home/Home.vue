<template>
  <div>
    <header-menu></header-menu>
    <div class="content"><router-view/></div>
  </div>
</template>

<script>
import headerMenu from '../core/HeaderMenu.vue'
export default {
  components: {headerMenu}
}
</script>

<style>
  .content {
    width: 70%;
    margin-left: 12%;
    margin-right: 12%;
  }
</style>
