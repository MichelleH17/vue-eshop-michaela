<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Store</RouterLink>
      <RouterLink to="/cart">Cart</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
