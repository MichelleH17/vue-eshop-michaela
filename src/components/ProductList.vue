<template>
  <div class="container mx-auto mt-10 px-4 pb-40">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ProductItem from './ProductItem.vue'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()

const products = computed(() => productStore.products)
</script>
