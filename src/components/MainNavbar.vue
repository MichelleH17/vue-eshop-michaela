<template>
  <header class="sticky top-0 left-0 w-full bg-green-700 text-white text-2xl py-2">
    <nav class="flex items-center justify-between px-4">
      <RouterLink to="/" class="hover:bg-green-800 px-2 py-0.5 rounded">
        <h1>E-SHOP</h1>
      </RouterLink>
      <div class="flex space-x-4">
        <RouterLink to="/store" class="hover:bg-green-800 px-2 py-0.5 rounded">Store</RouterLink>
        <RouterLink to="/orders" class="hover:bg-green-800 px-2 py-0.5 rounded">Orders</RouterLink>
        <RouterLink to="/cart" class="hover:bg-green-800 px-2 py-0.5 rounded">
          Cart
          <span
            v-if="totalItems > 0"
            class="absolute top-4 right-4 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-semibold"
            >{{ totalItems }}</span
          >
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()
const totalItems = computed(() => productStore.totalItems)
</script>

<style scoped>
.router-link-exact-active {
  background-color: #016630;
}
</style>
