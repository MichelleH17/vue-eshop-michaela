<template>
  <li
    class="grid grid-cols-5 gap-4 items-center m-4 border border-gray-200 rounded-lg p-4 shadow-md"
  >
    <img :src="picture" alt="Product Image" class="w-16 h-16 object-cover col-span-1" />
    <h2 class="text-lg font-semibold col-span-2">{{ item.product.name }}</h2>
    <p class="text-lg col-span-1 justify-self-end">
      {{ item.quantity }}x {{ item.product.price }}€
    </p>
    <p class="text-lg font-semibold col-span-1 justify-self-end">{{ totalPriceForProduct }}€</p>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  picture: string
  item: { product: { name: string; price: number }; quantity: number }
}>()

const totalPriceForProduct = props.item.product.price * props.item.quantity
</script>
