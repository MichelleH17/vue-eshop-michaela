<template>
  <div class="border border-gray-200 rounded-lg p-4 shadow-md bg-white maw-w-xs">
    <h2 class="text-lg md:text-xl font-semibold text-green-700 mb-2">{{ product.name }}</h2>
    <div class="bg-gray-100 rounded flex items-center justify-center h-32 mb-3">
      <img :src="product.picture" alt="Product Image" class="h-full object-cover" />
    </div>
    <div class="flex justify-between items-center">
      <span class="text-gray-900 text-lg font-bold">{{ product.price }}€</span>
      <button class="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg shadow">BUY</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../types'

defineProps<{
  product: Product
}>()
</script>
