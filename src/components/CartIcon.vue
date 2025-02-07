<template>
  <RouterLink to="/cart">
    <div
      class="fixed bottom-4 right-4 flex items-center justify-center bg-green-700 text-white rounded-full w-32 h-32 shadow-lg"
    >
      <img src="@/assets/shopping-cart.svg" alt="Cart" class="w-24 h-24" />
      <span
        class="absolute top-0 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold"
        >{{ totalItems }}</span
      >
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()
const totalItems = computed(() => productStore.totalItems)
</script>
