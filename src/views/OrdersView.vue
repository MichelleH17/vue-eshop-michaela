<template>
  <div class="max-w-5xl mx-auto">
    <OrderList :orders="orders" />
  </div>
</template>

<script setup lang="ts">
import OrderList from '@/components/OrderList.vue'
import { useOrderStore } from '@/stores/order'
import { computed } from 'vue'

const orderStore = useOrderStore()

const orders = computed(() => orderStore.orders)
</script>
