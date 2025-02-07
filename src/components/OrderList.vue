<template>
  <ul class="px-4">
    <li
      v-for="order in sortedOrders"
      :key="order.id"
      class="grid grid-cols-1 gap-4 items-center mt-4 border border-gray-200 rounded-lg shadow-md hover:border-green-700"
    >
      <RouterLink :to="`/orders/${order.id}`">
        <div class="p-4">
        <h2 class="text-lg font-semibold mb-2">Order ID: {{ order.id }}</h2>
        <p>Order created: {{ new Date(order.date).toLocaleDateString() }}</p>
        </div>
        <OrderItem
          v-for="(item, itemIndex) in order.items"
          :key="itemIndex"
          :picture="getProductDetails(item.productId)?.picture || ''"
          :item="{
            product: {
              name: getProductDetails(item.productId)?.name || '',
              price: getProductDetails(item.productId)?.price || 0,
            },
            quantity: item.quantity,
          }"
        />
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import OrderItem from '@/components/OrderItem.vue'
import { useProductStore } from '@/stores/product'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  orders: Array<{ id: number; date: string; items: { productId: number; quantity: number }[] }>
}>()

const productStore = useProductStore()

const getProductDetails = (productId: number) => {
  return productStore.getProductDetails(productId)
}

const sortedOrders = computed(() => {
  return [...props.orders].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})
</script>
