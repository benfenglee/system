<script setup>
import layoutHeaderVue from "./layout.modules/layoutHeader.vue";
import layoutMenuVue from "./layout.modules/layoutMenu.vue";
</script>

<template>
  <div class="layout-header">
    <layout-header-vue></layout-header-vue>
  </div>
  <div class="layout-menu">
    <layout-menu-vue></layout-menu-vue>
  </div>
  <div class="main-content">
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>