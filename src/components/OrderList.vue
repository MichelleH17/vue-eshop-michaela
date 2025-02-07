<template>
  <ul>
    <li v-for="(order, index) in orders" :key="index">
      <RouterLink :to="`/orders/${index}`">
        <OrderItem
          v-for="(item, itemIndex) in order"
          :key="itemIndex"
          :picture="getProductDetails(item.productId)?.picture || ''"
          :item="{ product: { name: getProductDetails(item.productId)?.name || '', price: getProductDetails(item.productId)?.price || 0 }, quantity: item.quantity }"
        />
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import OrderItem from '@/components/OrderItem.vue'
import { useProductStore } from '@/stores/product'
import { RouterLink } from 'vue-router'

defineProps<{
  orders: Array<{ productId: number; quantity: number }[]>
}>()

const productStore = useProductStore()

const getProductDetails = (productId: number) => {
  return productStore.getProductDetails(productId)
}
</script>
