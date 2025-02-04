<template>
  <li class="grid grid-cols-5 gap-4 items-center m-4 border border-gray-200 rounded-lg p-4 shadow-md">
    <button @click="removeItem" class="bg-red-700 hover:bg-red-800 text-white px-3 py-1 rounded-lg font-semibold col-span-1 w-auto justify-self-start">X</button>
    <h2 class="text-lg font-semibold col-span-2">{{ item.product.name }}</h2>
    <p class="text-lg col-span-1">{{ item.quantity }}x {{ item.product.price }}€</p>
    <p class="text-lg font-semibold col-span-1 justify-self-end">{{ totalPriceForProduct }}€</p>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProductStore } from '@/stores/product'
import type { Product } from '@/types'

const props = defineProps<{
  item: {
    product: Product,
    quantity: number
  }
}>()

const productStore = useProductStore()

const totalPriceForProduct = computed(() => productStore.getTotalPriceForProduct(props.item.product.id))

const removeItem = () => {
  productStore.removeItem(props.item.product)
}
</script>
