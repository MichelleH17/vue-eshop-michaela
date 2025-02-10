<template>
  <MainNavbar />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNavbar from './components/MainNavbar.vue'
import { useProductStore } from './stores/product'

const productStore = useProductStore()

void productStore.fetchProducts()
</script>
