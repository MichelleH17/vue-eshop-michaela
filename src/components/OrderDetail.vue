<template>
  <div class="mx-auto max-w-3xl">
    <div v-if="order" class="m-4 md:my-8 p-4 border border-gray-200 rounded-lg shadow-md">
      <h1 class="text-2xl md:text-4xl font-semibold my-2 md:my-4 text-green-700">Order details</h1>
      <div class="flex flex-row justify-between items-center">
        <div>
          <h2 class="text-lg md:text-xl font-semibold">Order ID: {{ order.id }}</h2>
          <p class="text-lg md:text-xl mb-2">
            Order created: {{ new Date(order.date).toLocaleDateString() }}
          </p>
        </div>
        <div class="flex flex-col">
          <p class="text-base md:text-xl font-semibold mb-2">Order Price:</p>
          <p class="text-2xl md:text-3xl font-semibold text-center">
            {{ calculateTotalPrice(order.items) }}€
          </p>
        </div>
      </div>
      <ul>
        <li v-for="(item, index) in order.items" :key="index" class="mb-4">
          <div class="flex flex-row gap-4 md:gap-6">
            <img
              :src="getProductDetails(item.productId)?.picture"
              alt="Product Image"
              class="w-28 sm:w-40 md:w-48 h-28 sm:h-40 md:h-48 mb-2 rounded-lg shadow-md col-span-2"
            />
            <div class="flex flex-col gap-0.5 md:gap-2.5">
              <p class="text-xl md:text-2xl font-semibold text-green-800">
                {{ getProductDetails(item.productId)?.name }}
              </p>
              <p class="text-base md:text-lg font-semibold">
                Price: {{ getProductDetails(item.productId)?.price }}€
              </p>
              <p class="text-base md:text-lg font-semibold">Quantity: {{ item.quantity }}</p>
              <p class="text-base md:text-lg font-semibold">
                Total Price: {{ totalProductPrice(item.productId, item.quantity) }}€
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <p class="text-center text-xl mt-20">Order not found</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product'
import { useRoute } from 'vue-router'

const route = useRoute()
const orderId = Number(route.params.id)

const productStore = useProductStore()
const order = productStore.orders.find((order) => order.id === orderId)

const getProductDetails = (productId: number) => {
  return productStore.getProductDetails(productId)
}

const calculateTotalPrice = (items: { productId: number; quantity: number }[]) => {
  return items.reduce((total, item) => {
    const product = productStore.getProductDetails(item.productId)
    return total + (product ? product.price * item.quantity : 0)
  }, 0)
}

const totalProductPrice = (productId: number, quantity: number) => {
  const product = productStore.getProductDetails(productId)
  return product ? product.price * quantity : 0
}
</script>
