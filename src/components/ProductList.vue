<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    <ProductItem v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product'
import ProductItem from './ProductItem.vue'

const { products } = useProductStore()
</script>
