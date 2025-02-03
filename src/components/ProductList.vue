<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    <ProductItem v-for="product in products" :key="product.id" :product="product" />
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
