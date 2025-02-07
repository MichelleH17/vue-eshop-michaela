<template>
  <div>
    <OrderList :orders="orders" />
  </div>
</template>

<script setup lang="ts">
import OrderList from '@/components/OrderList.vue'
import { useProductStore } from '@/stores/product'
import { computed } from 'vue';

const productStore = useProductStore();

const orders = computed(() => productStore.orders)
</script>
