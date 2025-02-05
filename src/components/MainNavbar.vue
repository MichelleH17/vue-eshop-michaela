<template>
  <header class="fixed top-0 left-0 w-full bg-green-700 text-white text-2xl py-2">
    <nav class="flex items-center justify-between px-4">
      <RouterLink to="/store" class="hover:bg-green-800 px-2 py-0.5 rounded">E-SHOP</RouterLink>
      <div class="flex space-x-4">
        <RouterLink to="/" class="hover:bg-green-800 px-2 py-0.5 rounded" :class="{'bg-green-800': route.path === '/store'}">Store</RouterLink>
        <RouterLink to="/cart" class="hover:bg-green-800 px-2 py-0.5 rounded" :class="{ 'bg-green-800': route.path === '/cart'}">
          Cart
          <span v-if="totalItems > 0" class="absolute top-4 right-4 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-semibold">{{ totalItems }}</span>
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useProductStore } from '@/stores/product'

const route = useRoute()
const productStore = useProductStore()
const totalItems = computed(() => productStore.totalItems)
</script>
