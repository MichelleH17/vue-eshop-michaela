<template>
  <main>
    <div
      v-if="cartItems.length > 0"
      class="p-4 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
    >
      <ul class="items-count md:col-span-3">
        <CartItem v-for="item in cartItems" :key="item.product.id" :item="item" />
      </ul>
      <div
        class="cart-total mt-4 sm:col-span-1 border border-gray-200 rounded-lg p-6 md:p-12 shadow-md w-auto justify-self-end justify-center flex flex-row md:flex-col items-center sm:h-32 md:h-48 space-x-2"
      >
        <p class="text-2xl sm:text-lg font-bold text-center">total </p>
        <h2 class="text-2xl md:text-3xl font-bold text-center md:mt-4">{{ totalPrice }} €</h2>
      </div>
      <RouterLink
        to="/orders"
        @click="createOrder"
        class="order-button bg-green-700 hover:bg-green-800 text-xl text-white px-12 py-3 mt-20 rounded-lg shadow font-semibold w-auto justify-self-center col-span-full"
        >Order
      </RouterLink>
    </div>
    <div v-else>
      <p class="text-center text-xl px-4 mt-20">Your cart is empty</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CartItem from '@/components/CartItem.vue'
import { useProductStore } from '@/stores/product'
import { useOrderStore } from '@/stores/order'
import { RouterLink } from 'vue-router'

const productStore = useProductStore()
const orderStore = useOrderStore()

const cartItems = computed(() => productStore.cartItems)
const totalPrice = computed(() => productStore.totalPrice)

const createOrder = () => {
  orderStore.createOrder()
  productStore.clearCart()
}
</script>
