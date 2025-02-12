<template>
  <div class="border border-gray-200 rounded-lg p-4 shadow-md bg-white maw-w-xs">
    <h2 class="text-lg md:text-xl font-semibold text-green-700 mb-2">{{ product.name }}</h2>
    <div class="bg-gray-50 rounded flex items-center justify-center h-48 mb-3">
      <img :src="product.picture" alt="Product Image" class="h-full object-cover" />
    </div>
    <div class="flex justify-between items-end">
      <span class="text-gray-900 text-xl font-bold">{{ product.price }}€</span>
      <div v-if="isAdded" class="flex items-center">
        <button
          @click="decreaseQuantity"
          class="bg-green-700 hover:bg-green-800 text-white px-3 py-1 rounded-lg font-semibold cursor-pointer"
        >
          -
        </button>
        <input
          type="number"
          v-model="quantity"
          class="w-12 text-center ml-2 mr-1 py-1 font-semibold"
        />
        <button
          @click="increaseQuantity"
          class="bg-green-700 hover:bg-green-800 text-white px-3 py-1 rounded-lg font-semibold cursor-pointer"
        >
          +
        </button>
      </div>
      <button
        v-else
        @click="addItem"
        class="bg-green-700 hover:bg-green-800 text-white px-3 py-1 rounded-lg shadow font-semibold cursor-pointer"
      >
        Buy
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Product } from '../types'
import { useProductStore } from '@/stores/product'

const props = defineProps<{
  product: Product
}>()

const product = props.product

const productStore = useProductStore()

const isAdded = computed(() => productStore.isAdded(props.product.id))

const quantity = computed(() => productStore.getQuantity(props.product.id))

const addItem = () => {
  productStore.addItem(props.product)
}

const increaseQuantity = () => {
  productStore.increaseQuantity(props.product)
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    productStore.decreaseQuantity(props.product)
  } else {
    productStore.removeItem(props.product)
  }
}
</script>
