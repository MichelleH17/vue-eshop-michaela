<template>
  <main>
    <div v-if="cartItems.length > 0" class="p-4 grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
      <ul class="sm:col-span-3">
        <CartItem v-for="item in cartItems" :key="item.product.id" :item="item" />
      </ul>
      <div class="mt-4 sm:col-span-1 border border-gray-200 rounded-lg p-12 shadow-md w-auto justify-self-end">
        <p class="sm:text-lg font-bold text-center">Total:</p>
        <h2 class="text-xl sm:text-3xl font-bold text-center mt-4">{{ totalPrice }}€</h2>
      </div>
    </div>
    <div v-else>
      <p class="text-center text-xl px-4 mt-12">Your cart is empty</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CartItem from '@/components/CartItem.vue'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()

const cartItems = computed(() => productStore.cartItems)
const totalPrice = computed(() => productStore.totalPrice)

</script>
