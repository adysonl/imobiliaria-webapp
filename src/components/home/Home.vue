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
    width: 86%;
    margin-left: 6%;
  }
</style>
