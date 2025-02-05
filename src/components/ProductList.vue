<template>
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import ProductItem from './ProductItem.vue'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()

onMounted(() => {
  productStore.fetchProducts()
})

const products = computed(() => productStore.products)
</script>
