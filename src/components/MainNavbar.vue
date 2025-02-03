<template>
  <header class="bg-green-700 text-white text-2xl py-2">
    <nav class="flex items-center justify-between px-4">
      <RouterLink to="/store" class="hover:bg-green-800 px-2 py-0.5 rounded">E-SHOP</RouterLink>
      <div class="flex space-x-4">
        <RouterLink to="/" class="hover:bg-green-800 px-2 py-0.5 rounded" :class="{'bg-green-800': $route.path === '/store'}">Store</RouterLink>
        <RouterLink to="/cart" class="hover:bg-green-800 px-2 py-0.5 rounded" :class="{ 'bg-green-800': $route.path === '/cart'}">Cart</RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
